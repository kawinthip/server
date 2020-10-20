import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('rooms')
    },
    show(roomId) {
        return Api().get('room/' + roomId)
    },
    post(room) {
        return Api().post('room', room)
    },
    put(room) {
        return Api().put('room/' + room.id, room)
    },
    delete(room) {
        return Api().delete('room/' + room.id, room)
    },
}