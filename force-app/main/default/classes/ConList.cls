public with sharing class ConList {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(Integer contacts){
        return[Select Id, Name, Phone from Contact Limit:contacts];
    }
}
