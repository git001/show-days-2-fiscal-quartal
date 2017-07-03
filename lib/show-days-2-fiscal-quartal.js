'use babel';

import ShowDays2FiscalQuartalView from './show-days-2-fiscal-quartal-view';
import { CompositeDisposable } from 'atom';

export default {

  showDays2FiscalQuartalView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.showDays2FiscalQuartalView = new ShowDays2FiscalQuartalView(state.showDays2FiscalQuartalViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.showDays2FiscalQuartalView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'show-days-2-fiscal-quartal:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.showDays2FiscalQuartalView.destroy();
  },

  serialize() {
    return {
      showDays2FiscalQuartalViewState: this.showDays2FiscalQuartalView.serialize()
    };
  },

  toggle() {
    console.log('ShowDays2FiscalQuartal was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
