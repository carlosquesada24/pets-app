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

export const SIMPLE_PETS_LIST = [
    {
        id: "1",
        name: "Firulais",
        photoURL:
            "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
    },
    {
        id: "2",
        name: "Rex",
        photoURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2vMOlB47SpcrTcp9SJxwg4wq81aTxFDJpQ&s",
    },
    {
        id: "3",
        name: "Spike",
        photoURL:
            "https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600%2Cc_limit/202931.jpg",
    },
];

export default PET_DEFAULT_STATE;
