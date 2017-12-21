import React from 'react';

const availableTables = ['StarcraftMods', 'StarcraftCampaigns', 'DiabloIIMods', 'DiabloIITools'];

export default ({ selectedTable, onChangeTable, records, onChangeRecord, selectedRecord }) => (
  <div className="cm-content-selector">
    <div className="row no-row-margin">
      <div className="col no-col-margin">
        <select className="form-control" value={selectedTable}>
          <option value="default" disabled hidden>
            Select Table
          </option>
          {availableTables.map(table => (
            <option key={table} value={table}>
              {table}
            </option>
          ))}
        </select>
      </div>
      <div className="col no-col-margin">
        <select className="form-control" value={selectedRecord}>
          <option value="default" disabled hidden>
            Select Record
          </option>
          {records &&
            records.map(record => (
              <option key={record._id} value={record._id}>
                {record.Name}
              </option>
            ))}
        </select>
      </div>
    </div>
  </div>
);
