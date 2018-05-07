'use babel';

import MaterialIconsAutocompleteView from './material-icons-autocomplete-view';
import { CompositeDisposable } from 'atom';

export default {

  materialIconsAutocompleteView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.materialIconsAutocompleteView = new MaterialIconsAutocompleteView(state.materialIconsAutocompleteViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.materialIconsAutocompleteView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'material-icons-autocomplete:preview': () => this.preview()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.materialIconsAutocompleteView.destroy();
  },

  serialize() {
    return {
      materialIconsAutocompleteViewState: this.materialIconsAutocompleteView.serialize()
    };
  },

  preview() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText();
        //create temporary html element to parse it
        let el = document.createElement('body');
        el.innerHTML = selection.trimLeft();

        //check if selected tag isn't i tag
        if (el.getElementsByTagName("i").length == 0){
          atom.notifications.addError("please select correct <i>i</i> tag");
          el.innerHTML = ""
          return false;
        }

        //check how many tags user Selected
        if (el.childNodes.length > 2) {
          //selected more than one tag
          console.log(el.childNodes, el.childNodes.length);
          atom.notifications.addError("please select only one tag");
          el.innerHTML = ""
          return false;
        }

        for (var i = 0; i < el.getElementsByTagName('i')[0].classList.length; i++) {
          if (el.getElementsByTagName('i')[0].classList[i] == "material-icons"){
            //includes material-icons classname
            atom.notifications.addInfo(selection);
            break;
            return false;
          } else if(i + 1 == el.getElementsByTagName('i')[0].classList.length) {
            //doesn't include material-icons className
            atom.notifications.addError("Selected tag has to include className 'material-icons'");
            return false;
          }
        }
    } else {
      atom.notifications.addWarning("Select any icon tag to see preview")
      el.innerHTML = ""
      return false;
    }
  }


};
