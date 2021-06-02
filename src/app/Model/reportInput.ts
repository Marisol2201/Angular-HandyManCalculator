import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export class ReportInput{

    technicianId?: string;
    serviceId?: string;
    dates: { startDate: Date; endDate: Date; } | undefined;
}