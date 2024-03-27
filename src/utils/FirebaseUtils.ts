export default class FirebaseUtils {
    
    static isDebugMode(): boolean {
        return process.env.FIREBASE_DEBUG_MODE === "true";
    }
}