export default class JrxFirebaseUtils {
    
    static isDebugMode(): boolean {
        return process.env.FIREBASE_DEBUG_MODE === "true";
    }
}