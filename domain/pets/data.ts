const PET_DEFAULT_STATE = {
    id: "pet1",
    name: "Pet 1",
    details: {
        information: {
            height: "120 cm",
            weight: "12 kg",
            age: "5 years old",
            breed: "American Stafford"
        },
        medical: {
            diagnoses: [
                {
                    date: "01/01/2024",
                    diagnosis: "Diagnosis 1"
                },
                {
                    date: "02/01/2024",
                    diagnosis: "Diagnosis 2"
                }
            ],
            allergies: [
                {
                    allergy: "Pollen Allergy"
                }
            ],
            medicines: [
                {
                    medicine: "Medicine A",
                    dosage: "10 mg",
                    frequency: "Once a day"
                }
            ],
            vaccines: [
                {
                    vaccine: "Rabies",
                    date: "15/06/2023"
                }
            ]
        }
    }
};

export default PET_DEFAULT_STATE;
