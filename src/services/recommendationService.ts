import { Vendor, EventPlan, MatchBreakdown } from '../types';

export function calculateVendorMatch(vendor: Vendor, event: EventPlan): MatchBreakdown {
  // 1. Location match: exact city gets 100%, nearby gets 80%, other 60%
  let locationScore = 70;
  if (vendor.location.toLowerCase() === event.location.toLowerCase()) {
    locationScore = 98;
  } else if (vendor.serviceAreas.some(area => area.toLowerCase() === event.location.toLowerCase())) {
    locationScore = 92;
  } else {
    locationScore = 65;
  }

  // 2. Budget compatibility
  // Check category budget allocation
  const catKey = vendor.category.toLowerCase() as keyof typeof event.budgetAllocations;
  const allocated = event.budgetAllocations[catKey] || (event.totalBudget * 0.2);
  let budgetScore = 85;

  if (vendor.category === 'Catering') {
    const totalCateringEstimate = vendor.startingPrice * event.guestCount;
    if (totalCateringEstimate <= allocated) {
      budgetScore = 96;
    } else if (totalCateringEstimate <= allocated * 1.25) {
      budgetScore = 86;
    } else {
      budgetScore = 72;
    }
  } else {
    if (vendor.startingPrice <= allocated) {
      budgetScore = 95;
    } else if (vendor.startingPrice <= allocated * 1.25) {
      budgetScore = 84;
    } else {
      budgetScore = 68;
    }
  }

  // 3. Rating Score (4.5 to 5.0 scaled to 85-99)
  const ratingScore = Math.min(99, Math.round((vendor.rating / 5.0) * 100));

  // 4. Style match
  const matchingStyles = vendor.styles.filter(style => 
    event.preferences.some(p => p.toLowerCase().includes(style.toLowerCase()))
  );
  let styleScore = 78;
  if (matchingStyles.length >= 2) {
    styleScore = 96;
  } else if (matchingStyles.length === 1) {
    styleScore = 88;
  }

  // 5. Availability
  const availabilityScore = vendor.availability ? 100 : 45;

  // Weighted overall: Budget 25%, Rating 20%, Style 20%, Location 20%, Availability 15%
  const overall = Math.min(
    98,
    Math.max(
      70,
      Math.round(
        budgetScore * 0.25 +
        locationScore * 0.20 +
        ratingScore * 0.20 +
        styleScore * 0.20 +
        availabilityScore * 0.15
      )
    )
  );

  // Dynamic reasons
  const reasons: string[] = [];
  if (budgetScore >= 85) reasons.push('Well aligned with your estimated budget');
  if (locationScore >= 90) reasons.push(`Located directly in ${event.location}`);
  if (vendor.rating >= 4.8) reasons.push(`Exceptional ${vendor.rating}★ rating from verified couples`);
  if (matchingStyles.length > 0) reasons.push(`Specializes in your preferred ${matchingStyles.join(' & ')} aesthetic`);
  if (vendor.availability) reasons.push('Confirmed available for your requested event timeframe');
  if (vendor.experience >= 8) reasons.push(`Seasoned professional with ${vendor.experience}+ years in high-profile events`);

  return {
    overall,
    budgetScore,
    locationScore,
    ratingScore,
    styleScore,
    availabilityScore,
    reasons: reasons.slice(0, 5),
  };
}

export function recommendVendors(vendors: Vendor[], event: EventPlan): (Vendor & { match: MatchBreakdown })[] {
  return vendors
    .map(vendor => {
      const match = calculateVendorMatch(vendor, event);
      return {
        ...vendor,
        matchScore: match.overall,
        match,
      };
    })
    .sort((a, b) => b.match.overall - a.match.overall);
}
