// const config = {
//     initial: 'normal',
//     states: {
//         normal: {
//             transitions: {
//                 study: 'busy',
//             }
//         },
//         busy: {
//             transitions: {
//                 get_tired: 'sleeping',
//                 get_hungry: 'hungry',
//             }
//         },
//         hungry: {
//             transitions: {
//                 eat: 'normal'
//             },
//         },
//         sleeping: {
//             transitions: {
//                 get_hungry: 'hungry',
//                 get_up: 'normal',
//             },
//         },
//     }
// };
class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.states=config.states;
        this.initial=config.initial;
        this.active=null;
        this.prev=null;
        
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        this.active=this.initial;
        return this.active;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
      
          this.initial = this.getState() === this.active ? state :  Error;
        
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {}

    /**
     * Resets FSM state to initial.
     */
    reset() {
        return this.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {

    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
    if(this.prev===null)
    { 
        return false;
    }
    else{
    this.active=this.prev;
        }
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {


        if(this.active===this.initial)
    { 
        return false;
    }
    else{
    this.prev=this.prev;
        }
    }

    

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
