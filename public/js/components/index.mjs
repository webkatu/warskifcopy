import App from './App.mjs';
import AppHeader from './AppHeader.mjs';
import AppFooter from './AppFooter.mjs';
import AppIndex from './AppIndex.mjs';
import Notification from './Notification.mjs';
import MatchRecordSearchForm from './MatchRecordSearchForm.mjs';
import MatchRecords from './MatchRecords.mjs';
import MatchRecordsTable from './MatchRecordsTable.mjs';
import MatchRecordHeaderTr from './MatchRecordHeaderTr.mjs';
import MatchRecordTr from './MatchRecordTr.mjs';
import HistoryRecords from './HistoryRecords.mjs';
import SPAAnchor from './SPAAnchor.mjs';


customElements.define('x-app', App);
customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
customElements.define('app-index', AppIndex);
customElements.define('x-notification', Notification);
customElements.define('match-record-search-form', MatchRecordSearchForm);
customElements.define('match-records', MatchRecords);
customElements.define('match-records-table', MatchRecordsTable);
customElements.define('match-record-header-tr', MatchRecordHeaderTr, { extends: 'tr' });
customElements.define('match-record-tr', MatchRecordTr, { extends: 'tr' });
customElements.define('history-records', HistoryRecords);
customElements.define('spa-anchor', SPAAnchor, { extends: 'a' });
