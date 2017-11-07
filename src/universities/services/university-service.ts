import { DataService } from "../../core/data-service";
import { AuthService } from "../../core/auth-service";
import { HttpClient } from "aurelia-fetch-client";
import { UniversityModel } from "../models/university-model";
import { autoinject } from "aurelia-dependency-injection";
import { CourseModel } from "../../courses/models/course-model";
import { UniversityDetailsModel } from "../models/university-details-model";

@autoinject()
export class UniversityService extends DataService
{
    constructor(authService: AuthService, httpClient: HttpClient)
    {
        super(httpClient,authService);
    }
    async browseAll(): Promise<UniversityModel[]>
    {
        return await super.get<UniversityModel[]>("university",false);
    }
    async getDetails(universityId: string): Promise<UniversityDetailsModel>
    {
        return await super.get<UniversityDetailsModel>(`university/${universityId}`,false);
    }
}