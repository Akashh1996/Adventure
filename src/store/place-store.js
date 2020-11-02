import { EventEmitter } from 'events';
import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';
import { getPlaceByID } from '../actions/place-actions';

const CHANGE = 'CHANGE';
let _place;

export class PlaceStore extends EventEmitter {
    getPlace() {
        return  _place
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

const placeStore = new PlaceStore();


dispatcher.register((action) => {
    switch(action.type) {
        case 'LOAD_PLACE_ID':
        _place = action.payload;
        placeStore.emitChange(); 
        break;

        default:
        break;
    }
});

export default placeStore




























// /* eslint-disable class-methods-use-this */
// import { EventEmitter } from 'events';
// import dispatcher from '../dispatcher/dispatcher';
// import actionTypes from '../actions/action-types';

// const CHANGE = 'CHANGE';
// let heroes = [];
// let hero;

// export class HeroStore extends EventEmitter {
//   getHeroes() {
//     return heroes;
//   }

//   getHero() {
//     return hero;
//   }

//   getHeroById(heroId) {
//     return heroes.find((heroFind) => heroFind.id === heroId);
//   }

//   deleteHero(heroId) {
//     return heroes.filter((heroFilter) => heroFilter.id !== heroId);
//   }

//   updateHero(updatedHero) {
//     return heroes.map((heroMap) => {
//       if (updatedHero.id === heroMap.id) {
//         return updatedHero;
//       }
//       return hero;
//     });
//   }

//   sliceHeroes(amount) {
//     if (!amount) {
//       return [];
//     }

//     return heroes.slice(0, amount);
//   }

//   addEventListener(callback) {
//     this.on(CHANGE, callback);
//   }

//   removeEventListener(callback) {
//     this.removeListener(CHANGE, callback);
//   }

//   emitChange() {
//     this.emit(CHANGE);
//   }
// }

// const heroStore = new HeroStore();

// dispatcher.register((action) => {
//   switch (action.type) {
//     case actionTypes.LOAD_HEROES:
//       heroes = action.payload;
//       heroStore.emitChange();
//       break;
//     case actionTypes.DELETE_HERO:
//       heroes = heroStore.deleteHero(action.payload);
//       heroStore.emitChange();
//       break;
//     case actionTypes.ADD_HERO:
//       heroes = [...heroes, action.payload];
//       heroStore.emitChange();
//       break;
//     case actionTypes.UPDATE_HERO:
//       heroes = heroStore.updateHero(action.payload);
//       heroStore.emitChange();
//       break;
//     case actionTypes.LOAD_HERO:
//       hero = action.payload;
//       heroStore.emitChange();
//       break;

//     default:
//       break;
//   }
// });

// export default heroStore;