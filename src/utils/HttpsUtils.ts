import { Request, Response } from "firebase-functions";

export default class HttpsUtils {
    
    /**
     * Handles CORS-related issue for httpsRequest function.
     * https://stackoverflow.com/questions/57326098/enable-cors-in-firebase-cloud-function
     * 
     * The function should simply retrurn when this function return true.
     */
    handleCors(request: Request, response: Response): boolean {
        response.set("Access-Control-Allow-Origin", "*");
        response.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
        response.set("Access-Control-Allow-Headers", "*");
        
        if (request.method === "OPTIONS") {
            response.end();
            return true;
        }
        return false;
    }
}