import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('userbookings')
    },
    show(userbookingId) {
        return Api().get('userbooking/' + userbookingId)
    },
    post(userbooking) {
        return Api().post('userbooking', userbooking)
    },
    put(userbooking) {
        return Api().put('userbooking/' + userbooking.id, userbooking)
    },
    delete(userbooking) {
        return Api().delete('userbooking/' + userbooking.id, userbooking)
    },
}