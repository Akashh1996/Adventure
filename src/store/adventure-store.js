import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher'

const CHANGE = 'CHANGE';
let _mapData; 

class SportStore extends EventEmitter {
    getMapData() {
        return _mapData
    }

    addEventListener(callback){
        this.on(CHANGE, callback);
    }
    removeEventListener(callback){
        this.removeListener(CHANGE, callback)
    }
    emitChange(){
        this.emit(CHANGE);
    }
}

const sportStore = new SportStore();

dispatcher.register((action) => {
    switch(action.type) {
        case 'LOAD_MAP':
        _mapData = action.playload;
        sportStore.emitChange(); 
        break;
        default:
            break;
    }
})

export default sportStore;