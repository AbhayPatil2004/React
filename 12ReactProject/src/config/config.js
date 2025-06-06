const config = {

    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.appwriteProjectId), 
    appwriteDataBaseId : String(import.meta.env.appwriteDataBaseId), 
    appwriteCollectionId : String(import.meta.env.appwriteCollectionId), 
    appwriteBucketId : String(import.meta.env.appwriteBucketId), 
}

export default config 