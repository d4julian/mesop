import {Injectable} from '@angular/core';

const SHOW_DEV_TOOLS_KEY = 'MESOP://SHOW_DEV_TOOLS_KEY';
const CURRENT_DEV_TOOLS_PANEL_KEY = 'MESOP://CURRENT_DEV_TOOLS_PANEL_KEY';

@Injectable({
  providedIn: 'root',
})
export class DevToolsSettings {
  showDevTools(): boolean {
    return window.localStorage.getItem(SHOW_DEV_TOOLS_KEY) === 'true';
  }

  toggleShowDevTools() {
    window.localStorage.setItem(
      SHOW_DEV_TOOLS_KEY,
      (!this.showDevTools()).toString(),
    );
  }

  getCurrentDevToolsPanel(): Panel {
    return Number(window.localStorage.getItem(CURRENT_DEV_TOOLS_PANEL_KEY));
  }

  setCurrentDevToolsPanel(panel: Panel) {
    return window.localStorage.setItem(
      CURRENT_DEV_TOOLS_PANEL_KEY,
      panel.toString(),
    );
  }
}

export enum Panel {
  Components = 0,
  Logs = 1,
}
