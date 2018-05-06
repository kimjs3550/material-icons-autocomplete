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
      'material-icons-autocomplete:toggle': () => this.toggle()
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

  toggle() {
    console.log('MaterialIconsAutocomplete was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
