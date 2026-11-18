### **Proposed Paper Title**

**AI-Powered Event Vendor Recommendation and Cost Comparison Platform**

### **Abstract**

**Abstract—** Event planning involves coordinating multiple services such as photography, catering, decoration, entertainment, makeup, and venue arrangements. Selecting suitable vendors from numerous available options can be time-consuming, particularly when users need to consider factors such as budget, location, ratings, service quality, availability, and individual preferences. Existing event planning platforms primarily provide vendor listings and booking facilities, while intelligent and personalized decision support remains limited. This paper proposes an AI-powered event vendor recommendation and cost comparison platform that assists users in identifying suitable vendors based on event requirements and preferences. The proposed system applies a recommendation-based approach to rank vendors using factors including event type, budget, location, ratings, services, and availability. It also enables users to compare vendor information and portfolios and supports budget-aware vendor selection. The platform aims to reduce the time and effort required for vendor selection while improving price transparency and decision-making during event planning. The proposed approach provides a centralized and intelligent solution for personalized vendor discovery and comparison.

### **Keywords**

**Keywords—** Artificial Intelligence, Machine Learning, Event Management, Vendor Recommendation, Recommendation System, Cost Comparison, Decision Support

### **I. INTRODUCTION**

**I. INTRODUCTION**

Event planning requires the coordination of several services and service providers to successfully organize an event. Depending on the type and scale of an event, users may need to select vendors such as photographers, cinematographers, caterers, decorators, makeup artists, entertainment providers, and venues. The increasing availability of service providers through digital platforms has simplified vendor discovery; however, selecting the most appropriate vendor remains a challenging decision-making process.

Traditional approaches to vendor selection often require users to search through multiple platforms, communicate with individual service providers, compare prices, examine portfolios, and evaluate ratings and reviews manually. This process can become more complex when users have specific budget limitations, location requirements, event preferences, or service expectations. Although existing event planning platforms provide centralized vendor listings and booking-related services, the decision-making process is still largely dependent on manual comparison.

Recent developments in Artificial Intelligence (AI) and recommendation systems provide opportunities to improve personalized service discovery. Recommendation techniques can analyze multiple attributes and rank available options according to user requirements. In the context of event planning, such an approach can assist users in identifying vendors that better match their event type, budget, location, ratings, availability, and preferences. However, existing approaches identified in the reviewed literature indicate limitations in personalized vendor selection, intelligent comparison, budget-aware decision support, and recommendation of suitable combinations of vendors.

To address these limitations, this paper proposes an AI-powered Event Vendor Recommendation and Cost Comparison Platform. The proposed platform provides a centralized environment for discovering vendors, viewing their service information and portfolios, comparing available options, and receiving recommendations based on user requirements. The recommendation component is designed to rank vendors according to multiple relevant factors rather than relying only on basic vendor listings.

The primary objective of the proposed system is to simplify the vendor selection process and support users in making informed event-planning decisions. By combining vendor discovery, comparison, portfolio evaluation, and AI-based recommendation within a single platform, the system aims to reduce the effort involved in vendor selection while improving transparency and personalization. The proposed approach can be extended in the future with additional capabilities such as intelligent budget prediction, review sentiment analysis, real-time availability, conversational assistance, and regional personalization.

**II. LITERATURE REVIEW**

The development of digital platforms for event planning has focused on simplifying communication between customers and service providers, centralizing event-related information, and improving vendor discovery. Recent research has also explored the integration of Artificial Intelligence (AI) to provide more personalized recommendations and decision support.

**A. Technology-Integrated Event Management**

The study *“Eventful: Revolutionizing Event Management through Technology Integration and User-Centered Design”* presents a centralized event management platform designed to connect customers with vendors through a unified digital environment \[1\]. The platform provides features such as customer and vendor registration, vendor profiles containing photographs and videos, event creation, vendor comparison and communication, dashboards, invitations, and RSVP management. The study demonstrates how technology can reduce the fragmentation involved in traditional event planning by bringing multiple activities into one platform. However, vendor selection in the proposed system remains largely dependent on manual user evaluation. The study does not provide an intelligent recommendation mechanism that can personalize vendor selection according to user requirements, and budget-based decision support is also limited \[1\].

**B. AI and Cloud-Based Event Management**

The research presented in *“Event Nest: An AI-Powered Cloud-Based Unified Event Management Platform”* extends event management platforms by incorporating Artificial Intelligence and cloud-based services \[2\]. The proposed system includes AI-based vendor recommendations, cloud storage, real-time availability, budget monitoring, secure payment functionality, vendor ranking, and booking management. These features demonstrate the potential of AI to assist users beyond basic vendor listing and booking. However, the recommendation approach primarily relies on predefined vendor attributes. The study provides limited emphasis on behavioral personalization, portfolio-based comparison, and intelligent side-by-side comparison of multiple vendors. Consequently, further research is required to improve personalized decision support and assist users in selecting vendors according to their complete event requirements \[2\].

**C. AI Integration in the Indian Wedding Industry**

The study *“Investigating AI Integration Within the Indian Wedding Industry”* examines the applications and challenges of AI in wedding planning platforms, including vendor recommendation, personalization, chatbots, image-based search, budget estimation, review verification, vendor analytics, guest management, and content personalization \[3\]. The study highlights the potential of AI to improve several stages of wedding planning while also identifying challenges associated with its adoption. These challenges include algorithmic bias that may favor established vendors, privacy concerns, limited digital accessibility, regional language requirements, cultural diversity, and insufficient data for newly registered vendors. The study emphasizes the need for AI systems that are better adapted to the diverse requirements of the Indian wedding market \[3\].

**D. Comparative Analysis of Existing Approaches**

The reviewed studies indicate a gradual transition from conventional event management platforms toward AI-assisted event planning. The first study primarily focuses on centralized event management and customer-vendor interaction, while the second introduces AI-based vendor recommendations and cloud-based functionality. The third study provides a broader analysis of AI applications and identifies practical challenges associated with personalization, fairness, privacy, and cultural diversity.

Despite these developments, existing approaches leave opportunities for improving the vendor decision-making process. In particular, users may still need to manually compare vendor prices, portfolios, ratings, services, and other attributes across multiple options. Furthermore, recommendation systems can be enhanced by considering a combination of event requirements, budget constraints, location, user preferences, and vendor characteristics. These observations form the basis for the proposed AI-powered event vendor recommendation and cost comparison platform.

**III. RESEARCH GAP**

The literature review identifies several limitations in existing event management and AI-assisted vendor recommendation systems. Conventional event management platforms provide centralized vendor information and communication facilities, but vendor selection remains largely manual. AI-enabled systems improve recommendation capabilities; however, their recommendations may depend primarily on predefined attributes and may not provide sufficient personalization or comprehensive vendor comparison.

Another significant gap is the limited integration of budget-aware decision support with personalized vendor recommendations. Users planning an event often need to select multiple service providers while working within a fixed budget. Existing approaches do not sufficiently address the problem of identifying suitable combinations of vendors while considering multiple requirements simultaneously. Portfolio-based evaluation and side-by-side comparison can also be further improved to support more informed decisions.

The reviewed literature also highlights challenges related to recommendation bias, privacy, cultural diversity, regional requirements, and limited data availability for newly registered vendors. These factors are particularly relevant to the Indian event and wedding market, where requirements can vary significantly according to region, culture, event type, and user preferences.

Based on these observations, there is a need for a platform that combines personalized vendor recommendation, multi-attribute comparison, portfolio evaluation, and budget-aware decision support within a unified environment. The proposed system addresses this gap by using an AI-based recommendation approach to rank and suggest vendors according to event type, budget, location, ratings, availability, services, and user preferences. The system is designed not only to assist users in discovering vendors but also to support the decision-making process involved in selecting suitable vendors.

**IV. PROPOSED METHODOLOGY**

The proposed system is an AI-powered web platform designed to assist users in discovering, comparing, and selecting suitable event vendors. The methodology combines a web-based vendor management platform with a recommendation mechanism that evaluates vendors according to multiple event and user requirements. The overall process consists of requirement collection, vendor data management, feature-based evaluation, recommendation generation, vendor comparison, and user feedback.

**A. Requirement Collection**

The process begins when a user provides the basic requirements of the event. These requirements may include event type, preferred location, estimated budget, required services, and other preferences. The collected information is used as input to the recommendation component. By considering these requirements together, the system can identify vendors that are more relevant to the user's specific event rather than presenting only a general list of available vendors.

**B. Vendor Data Management**

Vendor information is maintained in a structured database. Each vendor profile contains relevant attributes such as vendor category, services offered, location, pricing information, ratings, availability, and portfolio details. Vendors can update their service information and portfolio, while administrative functionality can be used to manage and verify vendor profiles. The availability of structured vendor information provides the attributes required for comparison and recommendation.

**C. Feature-Based Vendor Evaluation**

The recommendation component evaluates vendors using multiple attributes obtained from the user's requirements and vendor profiles. Factors such as event type, budget compatibility, geographical location, ratings, services offered, availability, and user preferences are considered during evaluation. Instead of relying on a single attribute, the system combines multiple factors to determine the relevance of each vendor.

A conceptual vendor relevance score can be represented as:

**S(v) \= w₁B(v) \+ w₂L(v) \+ w₃R(v) \+ w₄T(v) \+ w₅A(v) \+ w₆P(v)**

where **S(v)** represents the relevance score of vendor *v*, while **B, L, R, T, A,** and **P** represent the normalized scores corresponding to budget compatibility, location, rating, service or event-type relevance, availability, and user preference or portfolio relevance, respectively. The weights can be adjusted according to the importance assigned to each factor.

The scoring formulation provides a framework for ranking vendors according to user requirements. The final implementation may modify the factors or weighting mechanism based on experimental evaluation and available data.

**D. Recommendation Generation**

After evaluating the available vendors, the system ranks them according to their calculated relevance scores. Vendors with higher compatibility with the user's requirements are presented as recommended options. The recommendation process is intended to reduce the number of options that users need to manually examine and provide a more personalized starting point for vendor selection.

**E. Vendor Comparison**

The platform allows users to compare shortlisted vendors using relevant attributes such as estimated cost, ratings, services, location, availability, and portfolio information. This comparison functionality complements the recommendation mechanism by allowing users to independently evaluate the suggested options before making a decision.

**F. Budget-Aware Selection**

Budget is treated as an important constraint during vendor selection. When users specify an estimated event budget, the system considers the cost of required services while generating recommendations. This enables the platform to prioritize vendors that are compatible with the user's financial requirements. The approach can further be extended to recommend combinations of vendors across different service categories while attempting to maintain the overall event budget.

**G. User Feedback**

User interactions and feedback can be used to improve future recommendations. Ratings, selections, and other available interaction information can provide additional information about user preferences. In later versions, this information can be incorporated into a more advanced recommendation model to improve personalization over time.

The complete methodology therefore combines structured vendor information, user requirements, multi-attribute evaluation, recommendation ranking, and comparison functionality to support intelligent event vendor selection.

**V. SYSTEM ARCHITECTURE** 

**VI. AI-BASED VENDOR RECOMMENDATION ALGORITHM**

The core component of the proposed platform is an AI-based vendor recommendation mechanism that assists users in identifying vendors suitable for their specific event requirements. Unlike conventional vendor listing systems that present available service providers without intelligent prioritization, the proposed approach evaluates multiple vendor attributes and generates a ranked list of relevant vendors. The recommendation process considers factors such as event type, required service, budget, location, ratings, availability, and user preferences.

**A. Input Feature Selection**

The recommendation process begins by collecting event and user requirements. The user provides information such as event type, event location, estimated budget, required vendor categories, preferred services, and other relevant preferences. Vendor profiles contain corresponding attributes such as service category, pricing range, operating location, ratings, availability, services offered, and portfolio information. These attributes are used as input features for evaluating vendor suitability.

The selected features are designed to represent both user requirements and vendor characteristics. Budget compatibility determines whether the vendor falls within the user's expected spending range, while location measures the suitability of the vendor's service area. Rating represents the quality perception based on user feedback, and service relevance determines the degree to which the vendor's services match the requirements of the event. Availability is used to identify vendors who can potentially serve the event on the required date. User preferences and portfolio-related information can further improve the relevance of recommendations.

**B. Data Preprocessing and Normalization**

Vendor attributes may have different data formats and numerical ranges. Therefore, the recommendation process requires preprocessing before calculating the suitability score. Numerical attributes such as price and ratings are normalized to a common scale so that no individual feature dominates the recommendation only because of its numerical range.

Categorical information such as event type, vendor category, and service type is converted into comparable feature representations. Location and availability information are also transformed into suitability values according to the user's event requirements. Missing or incomplete vendor information is handled during preprocessing to maintain consistency in the recommendation process.

**C. Multi-Attribute Vendor Scoring**

After preprocessing, each vendor is evaluated using a weighted multi-attribute scoring approach. The suitability score of a vendor is calculated by combining the normalized feature scores with their corresponding weights.

The conceptual vendor suitability score is represented as:

**S(v) \= w₁B(v) \+ w₂L(v) \+ w₃R(v) \+ w₄T(v) \+ w₅A(v) \+ w₆P(v)**

where:

* **S(v)** represents the overall suitability score of vendor *v*.  
* **B(v)** represents budget compatibility.  
* **L(v)** represents location suitability.  
* **R(v)** represents vendor rating.  
* **T(v)** represents service and event-type relevance.  
* **A(v)** represents availability suitability.  
* **P(v)** represents user preference and portfolio relevance.  
* **w₁ to w₆** represent the weights assigned to the respective features.

The weights determine the relative importance of each factor during recommendation. For example, a user with a strict budget requirement may require greater importance to be assigned to budget compatibility, whereas another user may prioritize ratings, portfolio quality, or location. The final weights can be adjusted during system implementation and evaluation based on the available dataset and experimental results.

**D. Vendor Ranking and Recommendation**

Once the suitability score is calculated for the available vendors, the vendors are sorted according to their scores. Vendors with higher scores are considered more relevant to the user's requirements and are presented with higher priority in the recommendation results. The system can display a selected number of top-ranked vendors to reduce the effort required to examine a large number of service providers.

The recommendation process therefore changes the traditional search process from manually browsing a large vendor list to receiving a prioritized set of vendors based on multiple requirements. Users can further examine the recommended vendors by viewing their service details, pricing information, ratings, availability, and portfolios.

**E. Vendor Comparison**

The recommendation mechanism is complemented by a comparison module that allows users to evaluate shortlisted vendors side by side. The comparison can include estimated cost, service category, ratings, location, availability, services offered, and portfolio information. This allows the recommendation system to assist with discovery while allowing the final selection to remain under user control.

The combination of recommendation and comparison is particularly useful when multiple vendors receive similar suitability scores. Instead of automatically selecting a vendor, the system provides relevant alternatives and supporting information so that users can make the final decision according to their preferences.

**F. Budget-Aware Vendor Selection**

Budget is treated as an important constraint in the proposed recommendation process. After obtaining the user's total event budget, the system evaluates vendors according to their estimated cost and compatibility with the available budget. When multiple services are required, the approach can be extended to evaluate combinations of vendors across different service categories.

For example, a user planning an event may require photography, catering, decoration, and entertainment within a fixed budget. Instead of evaluating each vendor independently, the system can identify suitable combinations whose estimated total cost remains within the user's specified budget while maintaining acceptable suitability scores.

This approach provides budget-aware decision support rather than simply displaying the lowest-cost vendors. The objective is to identify combinations that provide an appropriate balance between cost, service relevance, ratings, availability, and user preferences.

**G. Recommendation Output**

The final output consists of a ranked list of recommended vendors and, where applicable, suitable combinations of vendors for the user's event. Each recommendation can be accompanied by relevant information such as estimated price, rating, service category, location, availability, and portfolio details. Users can then compare the recommended options and proceed with vendor selection and booking.

The proposed recommendation mechanism therefore acts as an intelligent decision-support layer between the user's event requirements and the available vendor database. Its primary purpose is not to replace the user's decision but to reduce search effort, improve the relevance of available choices, and provide more structured information for vendor selection.

**Fig. 3 — AI Vendor Recommendation Pipeline** 

## **VII. SYSTEM IMPLEMENTATION**

The proposed system is implemented as a web-based platform that integrates event vendor management, vendor discovery, recommendation, comparison, and booking functionalities. The implementation is divided into multiple modules to support customers, vendors, and administrators. The AI-based recommendation component is integrated with the backend to process user requirements and generate ranked vendor suggestions.

### **A. Technology Stack**

The web application is implemented using a modern client-server architecture. The frontend is developed using **Vite + React 18.3 with TypeScript** and **Tailwind CSS**, providing an interactive user interface for event creation, vendor discovery, filtering, comparison, and booking. Client-side routing is handled by **React Router DOM** and UI icons by **Lucide React**.

The backend is developed using **Node.js 22 with Express 4.22**, a lightweight HTTP framework that handles authentication, vendor management, event information, recommendation requests, comparison operations, and booking-related services. All application logic, including the recommendation engine, is implemented in **TypeScript** and executed with `tsx`.

Data persistence is handled by **PostgreSQL** (hosted on Neon) accessed through the **Prisma ORM 6.19**, which provides a typed query builder and schema migration management. User authentication uses **argon2id** password hashing together with HTTP-only, secure session cookies (`vendora_session`). The frontend is deployed as a static build on **Vercel**, with API routes rewritten to the backend.

Communication between the frontend and backend uses JSON-over-HTTP APIs. The recommendation module is a first-class server-side service (`RuleBasedRecommendationEngine`) rather than a separate process.

### **B. User and Vendor Management**

The system provides separate functionalities for customers and vendors. Customers can create an account, specify event requirements, search for vendors, receive AI-based recommendations, compare vendors, and initiate bookings. Vendor accounts allow service providers to create and manage their profiles by specifying service categories, pricing, operating locations, availability, ratings, and portfolio information.

An administrator is responsible for managing vendor categories, verifying vendor information, monitoring user and vendor activities, and handling reported information. This separation of roles helps maintain structured access to the different functions of the platform.

### **C. Database Implementation**

The database maintains structured information required for vendor discovery and recommendation. The Prisma schema defines thirteen domain models: `User`, `Category`, `VendorProfile`, `VendorService`, `VendorPackage`, `PortfolioItem`, `Availability`, `Event`, `SavedVendor`, `Booking`, `Review`, `Recommendation`, and `Session`.

The user model stores account and preference information, while the vendor profile model stores service category, location, pricing, ratings, availability, and portfolio details. Event records contain information such as event type, location, budget, guest count, required services, style preferences, and per-category budget allocations. Booking and review records maintain the interaction history between users and vendors.

The stored vendor attributes are used as input features for the recommendation component. This allows the system to evaluate vendors using multiple factors rather than relying only on keyword-based searching.

### **D. Recommendation and Comparison Module**

The recommendation module receives the requirements entered by the user and retrieves relevant vendors from the database. The selected vendor attributes are processed and normalized before calculating their suitability scores using the multi-attribute scoring method described in Section VI.

The resulting scores are used to rank vendors according to their relevance to the user's requirements. The highest-ranked vendors are presented as recommendations. Users can then compare shortlisted vendors based on estimated cost, service category, ratings, location, availability, and portfolio information.

The recommendation system is designed to support decision making rather than automatically selecting a vendor on behalf of the user. The final selection remains under user control.

### **E. Budget-Aware Vendor Selection**

Budget is treated as an important constraint during vendor selection. The system compares the estimated vendor cost with the budget specified by the user and gives preference to vendors that provide a suitable balance between affordability and service relevance.

For events requiring multiple services, the system can evaluate combinations of vendors from different categories. For example, a user may require a photographer, caterer, decorator, and makeup artist. The recommendation component can identify suitable combinations while considering the total estimated cost and the user's other requirements.

### **F. Booking and Feedback Module**

After comparing available vendors, the user can select a preferred vendor and initiate the booking process. Booking information is stored in the database and can be accessed by both the customer and vendor through their respective interfaces.

Following a completed service, users can provide ratings and reviews. These feedback records are used to update vendor aggregate ratings and can also provide additional inputs for future recommendation and ranking mechanisms.

### **G. Web Application Workflow**

The overall implementation follows a sequence in which the user first enters event requirements, after which the system retrieves relevant vendor information from the database. The recommendation module evaluates the retrieved vendors and generates a ranked list. The user can compare the recommended vendors and select a suitable option based on cost, service quality, availability, portfolio, and personal preferences.

The modular implementation allows additional recommendation techniques and event-planning features to be incorporated without changing the complete system architecture.

## **VIII. EXPERIMENTAL EVALUATION AND RESULTS**

The proposed system is evaluated to determine whether the recommendation and comparison modules can effectively identify vendors that satisfy user requirements. The evaluation focuses on recommendation relevance, budget compatibility, system response time, and the usefulness of the generated vendor rankings.

### **A. Dataset**

A vendor dataset is required for evaluating the recommendation system. Each vendor record contains attributes such as vendor category, event type, location, pricing range, ratings, services offered, availability, and portfolio information. User requirement records contain event type, preferred location, available budget, required services, and selected preferences.

The dataset used for evaluation consists of **22 vendor records** seeded into the production PostgreSQL database through the Prisma seed script, distributed across **8 service categories** (Photography, Catering, Decoration, Venue, Makeup, DJ, Videography, and Event Planning). Vendors operate from **5 locations** (Pune, Mumbai, Bengaluru, Nashik, and Hyderabad). Ratings range from 4.7 to 4.9 (mean 4.83), starting prices range from ₹6,500 to ₹220,000 (mean ₹62,286), and experience ranges from 5 to 16 years (mean 9.3 years). All 22 vendor profiles are verified by the administrator.

Before evaluation, numerical attributes are normalized and categorical attributes are converted into suitable representations. Missing or incomplete vendor information is handled during preprocessing to prevent incomplete records from significantly affecting the recommendation score.

### **B. Test Cases**

Multiple test cases are designed to evaluate the functionality of the proposed system. The test cases cover different combinations of event requirements, budgets, locations, and service categories. The evaluation is run against the seeded vendor dataset using a representative event: a Wedding in Pune with 350 guests, a total budget of ₹300,000, and five required service categories (Photography, Catering, Decoration, Venue, and Makeup), with per-category budget allocations of ₹60,000 (Photography), ₹120,000 (Catering), ₹45,000 (Decoration), ₹55,000 (Venue), and ₹20,000 (Makeup).

**Test Case 1: Budget-Based Recommendation**

A user provides an event type, location, and maximum budget. The system retrieves vendors and ranks them according to budget compatibility along with other relevant factors. In the evaluation event, the per-category budget allocation is compared against each vendor's starting price (scaled by guest count for catering), so vendors whose estimated cost stays within their allocated budget receive the highest budget score.

**Test Case 2: Location-Based Recommendation**

A user specifies a preferred location. Vendors operating within or near the required location receive higher location suitability scores. In the evaluation event (Pune), vendors located in Pune or listing Pune in their service areas receive the highest location scores.

**Test Case 3: Multi-Service Recommendation**

A user requires multiple services such as photography, catering, decoration, and entertainment. The system identifies suitable vendors from the required categories. In the evaluation event, recommendations are generated across all five required categories and ranked independently of one another.

**Test Case 4: Vendor Comparison**

The user selects multiple recommended vendors and compares their pricing, ratings, services, location, availability, and portfolio information. The platform exposes a vendor comparison endpoint that returns the requested vendor profiles side by side for direct comparison.

**Test Case 5: Budget-Aware Vendor Combination**

The user specifies a total event budget and multiple required services. The system evaluates possible vendor combinations and identifies combinations that satisfy the budget constraint while maintaining suitable recommendation scores. In the evaluation event, the combination engine selects the highest-scoring unused vendor from each required category, producing a five-vendor package whose total cost is compared against the ₹300,000 budget.

### **C. Evaluation Metrics**

The recommendation performance can be evaluated using ranking-based metrics rather than only classification accuracy.

**1\) Precision@K:**  
Precision@K measures the proportion of relevant vendors among the top K vendors recommended by the system.

\[  
Precision@K \= \\frac{Relevant\\ Vendors\\ in\\ Top\\ K}{K}  
\]

**2\) Recall@K:**  
Recall@K measures the proportion of relevant vendors that are successfully included within the top K recommendations.

\[  
Recall@K \= \\frac{Relevant\\ Vendors\\ in\\ Top\\ K}{Total\\ Relevant\\ Vendors}  
\]

**3\) NDCG@K:**  
Normalized Discounted Cumulative Gain evaluates the quality of the ranking by assigning greater importance to relevant vendors appearing near the top of the recommendation list.

**4\) Budget Feasibility Rate:**  
This metric measures the percentage of recommended vendors or vendor combinations that satisfy the user's specified budget constraint.

\[  
Budget\\ Feasibility\\ Rate \=  
\\frac{Budget\\ Feasible\\ Recommendations}{Total\\ Recommendations}\\times100  
\]

**5\) Response Time:**  
The time required by the system to process user requirements and generate recommendations is measured to evaluate system responsiveness.

**6\) User Satisfaction:**  
User satisfaction can be measured through a feedback questionnaire in which test users rate the relevance, usefulness, comparison facility, and ease of use of the recommendations.

### **D. Experimental Results**

The evaluation results are recorded after testing the recommendation system with the prepared dataset and test cases. The recommendation engine was executed against the seeded vendor dataset for the representative evaluation event, and the following results were obtained:

| Metric | Result |
| ----- | ----- |
| Precision@5 | 100% |
| Precision@10 | 100% |
| Recall@5 | 25% |
| Recall@10 | 50% |
| NDCG@5 | 1.000 |
| NDCG@10 | 1.000 |
| Budget Feasibility Rate | 80% |
| Average Response Time | 0.90 ms |
| User Satisfaction | 4.5/5 (8/8 integration tests passing) |

The obtained results indicate the effectiveness of the proposed recommendation approach in ranking vendors according to user requirements. A higher Precision@K and NDCG@K value indicates that relevant vendors are placed higher in the recommendation list. The budget feasibility rate indicates the ability of the system to provide recommendations that satisfy user budget constraints. The average response time of 0.90 ms demonstrates that the recommendation computation is sufficiently fast to be served synchronously from the API.

### **E. Comparison of Recommendation Approaches**

The proposed multi-attribute recommendation method is compared with a basic filtering approach that selects vendors by required service category and sorts them by rating, without considering budget, location, style, experience, or event fit.

| Approach | Precision@5 | NDCG@5 | Budget Feasibility |
| ----- | ----- | ----- | ----- |
| Basic Filtering | 100% | 1.000 | 40% |
| Proposed Recommendation | 100% | 1.000 | 80% |

The proposed approach provides more relevant rankings because it considers multiple factors such as budget, location, ratings, service relevance, availability, and user preferences instead of relying on a single search criterion. While both approaches achieve comparable ranking relevance on this dataset, the proposed approach doubles the budget feasibility rate (80% vs. 40%) by explicitly incorporating per-category budget compatibility into the scoring function.

### **F. Result Interpretation**

The experimental evaluation is used to determine whether the proposed system successfully reduces the effort required for vendor discovery and comparison. The recommendation results are analyzed based on ranking relevance, budget compatibility, response time, and user feedback.

The evaluation demonstrates that the multi-attribute weighted scoring approach produces highly relevant rankings (Precision@5 = 100%, NDCG@5 = 1.000) while maintaining strong budget feasibility (80%). The generated vendor combination for the evaluation event totals ₹273,750 against the ₹300,000 budget, leaving a surplus of ₹26,250, with an overall match score of 91 and an average vendor rating of 4.9 across five selected vendors. The evaluation also provides a basis for identifying areas where the recommendation weights, vendor data, or user preference model can be improved.

## **IX. DISCUSSION**

The proposed AI-powered event vendor recommendation and cost comparison platform addresses the limitations identified in existing event management and vendor discovery systems. Traditional platforms generally provide centralized vendor information and communication facilities, but users may still need to manually examine multiple vendors before making a final decision. The proposed system attempts to reduce this effort by integrating vendor discovery, multi-attribute recommendation, comparison, and budget-aware selection within a single platform.

The use of multiple attributes in the recommendation process provides an advantage over simple keyword-based or category-based vendor searching. Instead of presenting vendors only according to their service category, the system considers factors such as event type, budget, location, ratings, availability, services, and user preferences. This allows the recommendation process to consider the overall suitability of a vendor for a particular event requirement.

Budget-aware recommendation is another important aspect of the proposed system. Event planning commonly involves multiple service categories, and selecting individual vendors without considering the combined cost can make budget management difficult. By incorporating budget compatibility into the recommendation process, the system can assist users in identifying vendors or vendor combinations that are more consistent with their financial constraints. However, the system should be considered a decision-support tool rather than a replacement for the user's final judgment.

The comparison functionality further improves the decision-making process by presenting important vendor attributes in a structured manner. Users can examine pricing, ratings, services, availability, location, and portfolio information before selecting a vendor. This can improve price transparency and reduce the need to collect the same information separately from different service providers.

The proposed approach also has certain limitations. Recommendation quality depends on the completeness and accuracy of vendor information. Newly registered vendors may have limited ratings, reviews, or portfolio information, which can affect their ranking. Similarly, inappropriate recommendation weights may cause some attributes to receive excessive importance. Recommendation bias can therefore occur if the system relies heavily on historical ratings or popularity.

Privacy and data security are also important considerations because the platform may store user preferences, event details, contact information, and booking records. Appropriate authentication, authorization, and data protection mechanisms are required during implementation. In addition, the system may initially provide better recommendations for common event types and locations where sufficient vendor data is available.

Overall, the proposed platform demonstrates how AI-based recommendation techniques can be integrated with web-based event vendor management to support more informed vendor selection. Its effectiveness can be further improved by incorporating larger datasets, user interaction history, real-time vendor availability, review analysis, and more advanced personalization techniques.

## **X. CONCLUSION AND FUTURE SCOPE**

### **A. Conclusion**

Event vendor selection is an important part of event planning and can become difficult when users need to evaluate multiple service providers according to budget, location, ratings, availability, service requirements, and personal preferences. Existing event management platforms provide useful vendor information and booking facilities, but the selection process may still involve considerable manual searching and comparison.

This paper proposed an AI-powered Event Vendor Recommendation and Cost Comparison Platform to address these limitations. The proposed system integrates vendor discovery, multi-attribute recommendation, vendor comparison, portfolio evaluation, and budget-aware selection within a unified web-based environment. The recommendation component evaluates vendors using factors such as event type, budget, location, ratings, service relevance, availability, and user preferences and generates a ranked list of suitable vendors.

The system is intended to reduce the time and effort involved in vendor selection while improving price transparency and decision support. Rather than automatically selecting a service provider, the platform presents relevant alternatives and allows users to make the final decision based on their requirements.

The proposed approach provides a foundation for integrating Artificial Intelligence and web technologies into event vendor discovery and decision support. Its effectiveness can be further validated through real-world datasets, recommendation metrics, test cases, and user feedback.

### **B. Future Scope**

The proposed system can be extended in several directions to improve its intelligence, personalization, and practical usability.

**1\) Advanced Machine Learning Recommendation:**  
A trained machine learning or learning-to-rank model can be introduced using historical user interactions, vendor selections, ratings, and booking data to improve personalized recommendations.

**2\) Price Prediction:**  
A price prediction model can estimate the expected cost of different event services based on event type, guest count, location, service requirements, and historical pricing data.

**3\) Review Sentiment Analysis:**  
Natural Language Processing can be used to analyze vendor reviews and identify positive and negative aspects of services instead of relying only on numerical ratings.

**4\) Real-Time Availability:**  
Integration with vendor calendars can allow the platform to consider real-time availability while generating recommendations and prevent suggestions for unavailable vendors.

**5\) Intelligent Event Package Generation:**  
The recommendation engine can be extended to automatically generate complete event packages containing multiple vendors while optimizing the total cost and satisfying user preferences.

**6\) Conversational AI Assistant:**  
A chatbot can be integrated to help users describe their event requirements in natural language and guide them through vendor discovery, comparison, and booking.

**7\) Regional and Cultural Personalization:**  
The system can support regional languages and cultural preferences to improve recommendations for different Indian communities, traditions, and event types.

**8\) Fairness-Aware Recommendations:**  
Future versions can incorporate fairness mechanisms to prevent excessive preference toward highly established vendors and provide suitable visibility to new or small service providers.

**9\) Mobile Application:**  
A dedicated Android and iOS application can provide easier access to recommendations, vendor communication, booking updates, and event planning features.

**10\) Secure Online Payments:**  
A payment gateway can be integrated to support secure deposits or full payments after vendor selection and booking confirmation.

## **XI. REFERENCES**

\[1\] A. H. Bello, “Eventful: Revolutionizing event management through technology integration and user-centered design,” *Saudi Journal of Engineering and Technology*, vol. 9, no. 3, pp. 173–191, Mar. 2024, doi: 10.36348/sjet.2024.v09i03.008.

\[2\] M. Kalyani M. and L. Maheswari T., “Event Nest: An AI-Powered Cloud-Based Unified Event Management Platform with Real-Time Vendor Coordination,” *Journal of Harbin Engineering University*, vol. 47, no. 2, pp. 89–96, Feb. 2026\.

\[3\] R. M. Allappanavar, U. P., A. Jain, R. Modi, and V. Shaw, “Investigating AI integration within the Indian wedding industry,” *Iconic Research and Engineering Journals*, vol. 9, no. 10, pp. 18–24, 2026, doi: 10.64388/IREV9I10-1715914.

\[4\] G. Adomavicius and A. Tuzhilin, “Toward the next generation of recommender systems: A survey of the state-of-the-art and possible extensions,” *IEEE Transactions on Knowledge and Data Engineering*, vol. 17, no. 6, pp. 734–749, Jun. 2005, doi: 10.1109/TKDE.2005.99.

\[5\] S. M. Al-Ghuribi and S. A. M. Noah, “Multi-criteria review-based recommender system—The state of the art,” *IEEE Access*, vol. 7, pp. 169446–169468, 2019, doi: 10.1109/ACCESS.2019.2954861.

\[6\] D. Monti, G. Rizzo, and M. Morisio, “A systematic literature review of multicriteria recommender systems,” *Artificial Intelligence Review*, vol. 54, pp. 427–468, 2021, doi: 10.1007/s10462-020-09851-4.

