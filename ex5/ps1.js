var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Patient = /** @class */ (function () {
    function Patient(patientId, name, age, diagnosis) {
        this.patientId = patientId;
        this.name = name;
        this.age = age;
        this.diagnosis = diagnosis;
    }
    return Patient;
}());
var Inpatient = /** @class */ (function (_super) {
    __extends(Inpatient, _super);
    function Inpatient(patientId, name, age, diagnosis, roomNumber, daysAdmitted) {
        var _this = _super.call(this, patientId, name, age, diagnosis) || this;
        _this.dailyRate = 2000;
        _this.roomNumber = roomNumber;
        _this.daysAdmitted = daysAdmitted;
        return _this;
    }
    Inpatient.prototype.admit = function () {
        console.log("Inpatient ".concat(this.name, " admitted to room ").concat(this.roomNumber, "."));
    };
    Inpatient.prototype.discharge = function () {
        console.log("Inpatient ".concat(this.name, " discharged after ").concat(this.daysAdmitted, " days."));
    };
    Inpatient.prototype.generateBill = function () {
        return this.daysAdmitted * this.dailyRate;
    };
    return Inpatient;
}(Patient));
var Outpatient = /** @class */ (function (_super) {
    __extends(Outpatient, _super);
    function Outpatient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.consultationFee = 500;
        return _this;
    }
    Outpatient.prototype.admit = function () {
        console.log("Outpatient ".concat(this.name, " registered for consultation."));
    };
    Outpatient.prototype.discharge = function () {
        console.log("Outpatient ".concat(this.name, " consultation completed."));
    };
    Outpatient.prototype.generateBill = function () {
        return this.consultationFee;
    };
    return Outpatient;
}(Patient));
var EmergencyPatient = /** @class */ (function (_super) {
    __extends(EmergencyPatient, _super);
    function EmergencyPatient(patientId, name, age, diagnosis, treatmentCost) {
        var _this = _super.call(this, patientId, name, age, diagnosis) || this;
        _this.emergencyFee = 1000;
        _this.treatmentCost = treatmentCost;
        return _this;
    }
    EmergencyPatient.prototype.admit = function () {
        console.log("Emergency patient ".concat(this.name, " admitted immediately."));
    };
    EmergencyPatient.prototype.discharge = function () {
        console.log("Emergency patient ".concat(this.name, " stabilized and discharged."));
    };
    EmergencyPatient.prototype.generateBill = function () {
        return this.emergencyFee + this.treatmentCost;
    };
    return EmergencyPatient;
}(Patient));
function admitPatient(patient) {
    patient.admit();
}
function dischargePatient(patient) {
    patient.discharge();
}
function generatePatientBill(patient) {
    var bill = patient.generateBill();
    console.log("Total Bill for ".concat(patient.name, ": \u20B9").concat(bill));
}
var inpatient = new Inpatient("P101", "John Doe", 45, "Pneumonia", 201, 5);
var outpatient = new Outpatient("P102", "Jane Smith", 30, "Flu");
var emergencyPatient = new EmergencyPatient("P103", "Mike Johnson", 50, "Accident Trauma", 8000);
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
