export const steps: any = [
    {
        id: "1",
        message: "Hello, we're here to help",
        trigger: "2",
    },
    {
        id: "2",
        message: "Which services are you looking for?",
        trigger: "3",
    },
    {
        id: "3",
        options: [
            { value: 1, label: "ARCHITECTURE", trigger: "architecture" },
            { value: 2, label: "CONSTRUCTION", trigger: "construction" },
        ],
    },
    {
        id: "architecture",
        options: [
            { value: 1, label: "Competitions", trigger: "competitions_architecture" },
            {
                value: 2,
                label: "Design Proposals",
                trigger: "design_proposals_architecture",
            },
            { value: 3, label: "Drawings", trigger: "drawings_architecture" },
            { value: 4, label: "Assistance", trigger: "assistance_architecture" },
            {
                value: 5,
                label: "Packages & Pricing",
                trigger: "packages_pricing_architecture",
            },
        ],
    },
    {
        id: "construction",
        options: [
            {
                value: 1,
                label: "Contractors and engineers",
                trigger: "contractors_engineers_construction",
            },
            { value: 2, label: "Location", trigger: "location_construction" },
            { value: 3, label: "Sanctioning", trigger: "sanctioning_construction" },
            { value: 4, label: "Drawings", trigger: "drawings_construction" },
            { value: 5, label: "Assistance", trigger: "assistance_construction" },
            { value: 6, label: "Execution", trigger: "execution_construction" },
            {
                value: 7,
                label: "Packages & Pricing",
                trigger: "packages_pricing_construction",
            },
        ],
    },
    // competitions_architecture
    {
        id: "competitions_architecture",
        options: [
            {
                value: 1,
                label: "How does Builtdesign launch a competitions for my project?",
                trigger: "competitions_architecture_1",
            },
            {
                value: 2,
                label: "When does the competition end after launch?",
                trigger: "competitions_architecture_2",
            },
        ],
    },
    {
        id: "competitions_architecture_1",
        message:
            "We launch your project competition in the Builtdesign community of architectural designers. We create & provide them your Project Design Brief which including all building requirements",
        trigger: "thankyou",
    },
    {
        id: "competitions_architecture_2",
        message:
            "Depending upon the type & scale of the project, a competition ends within 4-6 weeks after launch.",
        trigger: "thankyou",
    },
    // design_proposals_architecture
    {
        id: "design_proposals_architecture",
        options: [
            {
                value: 1,
                label: "How many proposals will I get for my project?",
                trigger: "design_proposals_architecture_1",
            },
            {
                value: 2,
                label: "In how much time will I receive the proposals?",
                trigger: "design_proposals_architecture_2",
            },
            {
                value: 3,
                label: "How will I choose the best proposal for myself?",
                trigger: "design_proposals_architecture_3",
            },
            {
                value: 4,
                label: "What if I don't like some parts of a design proposal?",
                trigger: "design_proposals_architecture_4",
            },
            {
                value: 5,
                label: "Which drawings will be included in the proposals?",
                trigger: "design_proposals_architecture_5",
            },
        ],
    },
    {
        id: "design_proposals_architecture_1",
        message:
            "You will receive multiple proposals, depending upon the number of architects participating in the competition.",
        trigger: "thankyou",
    },
    {
        id: "design_proposals_architecture_2",
        message:
            "Once the competition ends, you receive all your design proposals within 3-4 days.",
        trigger: "thankyou",
    },
    {
        id: "design_proposals_architecture_3",
        message:
            "After you receive all the designs, a design discussion meeting is conducted where the appointed Builtdesign architect helps you make an informed decision. With our effective rating & ranking system, as well as our architect's professional opinions, we help you curate the best design for your project in terms of cost, feasibility, aesthetics, and all other crucial parameters.",
        trigger: "thankyou",
    },
    {
        id: "design_proposals_architecture_4",
        message:
            "We offer to make up to 4 changes to the design proposals as per your wishes. Your satisfaction is our number one priority.",
        trigger: "thankyou",
    },
    {
        id: "design_proposals_architecture_5",
        message:
            "All floor plans, 1-2 Elevations, and 3D Views are included in all the design proposals.",
        trigger: "thankyou",
    },
    // drawings_architecture (need addition)
    {
        id: "drawings_architecture",
        options: [
            {
                value: 1,
                label: "Which drawings are included in the packages?",
                trigger: "drawings_architecture_1",
            },
        ],
    },
    {
        id: "drawings_architecture_1",
        message:
            "During the Design phase, you receive all floor plans, 1-2 elevations, and 3D views. After finalising the design, you get a sanctioning drawing for approval process. After that, we provide all necessary structural and architectural drawings.",
        trigger: "thankyou",
    },
    // assistance_architecture
    {
        id: "assistance_architecture",
        options: [
            {
                value: 1,
                label:
                    "At which locations does Builtdesign give architecture services?",
                trigger: "assistance_architecture_1",
            },
            {
                value: 2,
                label: "How will Builtdesign assist for architecture services?",
                trigger: "assistance_architecture_2",
            },
        ],
    },
    {
        id: "assistance_architecture_1",
        message:
            "We provide our service Pan India, no matter which town, city, or state the project is based in.",
        trigger: "thankyou",
    },
    {
        id: "assistance_architecture_2",
        message:
            "Our professionals are available for your resolving your doubts and queries throughout the entire process of your project.",
        trigger: "thankyou",
    },
    // packages_pricing_architecture
    {
        id: "packages_pricing_architecture",
        options: [
            {
                value: 1,
                label:
                    "Builtdesign Synergy multiple premium design proposals at the cost of one",
                trigger: "packages_pricing_architecture_1",
            },
            {
                value: 2,
                label:
                    "Builtdesign In-house single premium design proposal by in-house team",
                trigger: "packages_pricing_architecture_2",
            },
        ],
    },
    {
        id: "packages_pricing_architecture_1",
        message:
            "The Synergy Package includes multiple premium design proposals at the cost of one design. We launch a nationwide competition for your project, you get beautiful, unique design proposals from architects across India. The Builtdesign Synergy package rate is INR 50/sq. ft. This includes: -all the design proposals for designing -Sanctioning drawing for approvals -Structural & architectural drawings for construction execution -Supervision and guidance for contractor and site engineer -Customer support for the entire project.",
        trigger: "thankyou",
    },
    {
        id: "packages_pricing_architecture_2",
        message:
            "The In-house Package includes a single premium design proposal designed by Builtdesign's in-house team. Our in-house team of professional architects create a beautiful, unique design proposal for your project; fulfilling all your requirements. The Builtdesign Synergy package rate is INR 35/sq. ft. This includes: -all the design proposals for designing -Sanctioning drawing for approvals -Structural & architectural drawings for construction execution -Supervision and guidance for contractor and site engineer -Customer support for the entire project.",
        trigger: "thankyou",
    },
    // contractors_engineers_construction
    {
        id: "contractors_engineers_construction",
        options: [
            {
                value: 1,
                label:
                    "Will Builtdesign appoint a contractor and site engineer for my project?",
                trigger: "contractors_engineers_construction_1",
            },
            {
                value: 2,
                label: "Will the contractor and engineer be trustworthy?",
                trigger: "contractors_engineers_construction_2",
            },
            {
                value: 3,
                label: "Can I appoint my own contractor and engineer?",
                trigger: "contractors_engineers_construction_3",
            },
        ],
    },
    {
        id: "contractors_engineers_construction_1",
        message:
            "Yes, we can surely appoint a contractor & site engineer on your site. You can also appoint your own professionals, as per your choice. We shall coordinate with them during construction.",
        trigger: "thankyou",
    },
    {
        id: "contractors_engineers_construction_2",
        message:
            "Yes. We have a 12 step Verification process for all the professionals involved. Only trustworthy and verified people will handle your project, guaranteed.",
        trigger: "thankyou",
    },
    {
        id: "contractors_engineers_construction_3",
        message:
            "Absolutely. You can appoint your own contractor & site engineer, as per your choice. We shall coordinate with them during construction.",
        trigger: "thankyou",
    },
    // location_construction
    {
        id: "location_construction",
        options: [
            {
                value: 1,
                label:
                    "At which locations does Builtdesign give construction services?",
                trigger: "location_construction_1",
            },
        ],
    },
    {
        id: "location_construction_1",
        message:
            "Our construction coordination with contractor and site engineer is available pan India. Construction services are currently available only in Nagpur, MH.",
        trigger: "thankyou",
    },
    // sanctioning_construction
    {
        id: "sanctioning_construction",
        options: [
            {
                value: 1,
                label: "Does Builtdesign provide the Sanctioning drawing?",
                trigger: "location_construction_1",
            },
            {
                value: 2,
                label: "Will the sanctioning process be taken care of by Builtdesign?",
                trigger: "location_construction_2",
            },
        ],
    },
    {
        id: "location_construction_1",
        message:
            "Yes. Sanctioning drawing is an important part of the drawings in both our packages.",
        trigger: "thankyou",
    },
    {
        id: "location_construction_2",
        message:
            "No, but we assist you in the process of sanctioning at your location to make it easier.",
        trigger: "thankyou",
    },
    // drawings_construction
    {
        id: "drawings_construction",
        options: [
            {
                value: 1,
                label: "Which drawings are included in the packages?",
                trigger: "drawings_construction_1",
            },
        ],
    },
    {
        id: "drawings_construction_1",
        message:
            "During the Design phase, you receive all floor plans, 1-2 elevations, and 3D views. After finalising the design, you get a sanctioning drawing for approval process. After that, we provide all necessary structural and architectural drawings.",
        trigger: "thankyou",
    },
    // assistance_construction
    {
        id: "assistance_construction",
        options: [
            {
                value: 1,
                label: "How does Builtdesign assist the contractor and site engineer?",
                trigger: "assistance_construction_1",
            },
            {
                value: 2,
                label: "Will Builtdesign visit my project site?",
                trigger: "assistance_construction_2",
            },
            {
                value: 3,
                label:
                    "Will Builtdesign help solve any disputes between the contractor and me?",
                trigger: "assistance_construction_3",
            },
        ],
    },
    {
        id: "assistance_construction_1",
        message:
            "We keep a regular check on the site development. As architects, we guide the site supervisor and the contractor for precise construction.",
        trigger: "thankyou",
    },
    {
        id: "assistance_construction_2",
        message: "no answers",
        trigger: "thankyou",
    },
    {
        id: "assistance_construction_3",
        message: "no answers",
        trigger: "thankyou",
    },
    // execution_construction
    {
        id: "execution_construction",
        options: [
            {
                value: 1,
                label: "What will the timeline be for Construction execution?",
                trigger: "execution_construction_1",
            },
            {
                value: 2,
                label: "Can I ask for design changes once execution begins?",
                trigger: "execution_construction_2",
            },
        ],
    },
    {
        id: "execution_construction_1",
        message:
            "Your project timeline will be decided as per the size of the project, and availability of resources.",
        trigger: "thankyou",
    },
    {
        id: "execution_construction_2",
        message: "no answers",
        trigger: "thankyou",
    },
    // packages_pricing_construction
    {
        id: "packages_pricing_construction",
        options: [
            {
                value: 1,
                label: "What is included in this package?",
                trigger: "packages_pricing_construction_1",
            },
            {
                value: 2,
                label: "What is the price for the Construction package?",
                trigger: "packages_pricing_construction_1",
            },
        ],
    },
    {
        id: "packages_pricing_construction_1",
        message: "no answers",
        trigger: "thankyou",
    },
    {
        id: "packages_pricing_construction_2",
        message: "no answers",
        trigger: "thankyou",
    },
    // thankyou
    {
        id: "thankyou",
        message: "Thankyou! you can restart!",
        trigger: "2",
    },
];
