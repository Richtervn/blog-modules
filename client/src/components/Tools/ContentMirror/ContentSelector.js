import React from 'react';

const availableTables = ['StarcraftMods', 'StarcraftCampaigns', 'DiabloIIMods', 'DiabloIITools'];

export default ({ selectedTable, onChangeTable, records, onChangeRecord, selectedRecord }) => (
  <div className="t-ct-selector">
    <div className="row no-row-margin">
      <div className="col no-col-margin">
        <div className="t-ct-selector-input">
          <select className="form-control" value={selectedTable} onChange={onChangeTable}>
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
      </div>
      <div className="col no-col-margin">
        <div className="t-ct-selector-input">
          <select className="form-control" value={selectedRecord} onChange={onChangeRecord}>
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
  </div>
);
