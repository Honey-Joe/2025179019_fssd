// Interface to enforce common patient structure
interface IPatient {
    patientId: string;
    name: string;
    age: number;
    diagnosis: string;

    admit(): void;
    discharge(): void;
    generateBill(): number;
}

abstract class Patient implements IPatient {
    constructor(
        public patientId: string,
        public name: string,
        public age: number,
        public diagnosis: string
    ) {}

    abstract admit(): void;
    abstract discharge(): void;
    abstract generateBill(): number;
}


class Inpatient extends Patient {
    private roomNumber: number;
    private daysAdmitted: number;
    private dailyRate: number = 2000;

    constructor(
        patientId: string,
        name: string,
        age: number,
        diagnosis: string,
        roomNumber: number,
        daysAdmitted: number
    ) {
        super(patientId, name, age, diagnosis);
        this.roomNumber = roomNumber;
        this.daysAdmitted = daysAdmitted;
    }

    admit(): void {
        console.log(`Inpatient ${this.name} admitted to room ${this.roomNumber}.`);
    }

    discharge(): void {
        console.log(`Inpatient ${this.name} discharged after ${this.daysAdmitted} days.`);
    }

    generateBill(): number {
        return this.daysAdmitted * this.dailyRate;
    }
}
class Outpatient extends Patient {
    private consultationFee: number = 500;

    admit(): void {
        console.log(`Outpatient ${this.name} registered for consultation.`);
    }

    discharge(): void {
        console.log(`Outpatient ${this.name} consultation completed.`);
    }

    generateBill(): number {
        return this.consultationFee;
    }
}
class EmergencyPatient extends Patient {
    private emergencyFee: number = 1000;
    private treatmentCost: number;

    constructor(
        patientId: string,
        name: string,
        age: number,
        diagnosis: string,
        treatmentCost: number
    ) {
        super(patientId, name, age, diagnosis);
        this.treatmentCost = treatmentCost;
    }

    admit(): void {
        console.log(`Emergency patient ${this.name} admitted immediately.`);
    }

    discharge(): void {
        console.log(`Emergency patient ${this.name} stabilized and discharged.`);
    }

    generateBill(): number {
        return this.emergencyFee + this.treatmentCost;
    }
}
function admitPatient(patient: IPatient): void {
    patient.admit();
}

function dischargePatient(patient: IPatient): void {
    patient.discharge();
}

function generatePatientBill(patient: IPatient): void {
    const bill = patient.generateBill();
    console.log(`Total Bill for ${patient.name}: ₹${bill}`);
}
const inpatient = new Inpatient(
    "P101",
    "John Doe",
    45,
    "Pneumonia",
    201,
    5
);

const outpatient = new Outpatient(
    "P102",
    "Jane Smith",
    30,
    "Flu"
);

const emergencyPatient = new EmergencyPatient(
    "P103",
    "Mike Johnson",
    50,
    "Accident Trauma",
    8000
);

// Inpatient workflow
admitPatient(inpatient);
generatePatientBill(inpatient);
dischargePatient(inpatient);

// Outpatient workflow
admitPatient(outpatient);
generatePatientBill(outpatient);
dischargePatient(outpatient);

// Emergency workflow
admitPatient(emergencyPatient);
generatePatientBill(emergencyPatient);
dischargePatient(emergencyPatient);
