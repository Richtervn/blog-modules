import React from 'react';
import { getClass } from 'helpers/mu';

export default ({ characters }) => (
  <table>
    <tbody>
      <tr>
        <th />
        <th>Name</th>
        <th>Account</th>
        <th>Class</th>
        <th>Resets</th>
        <th>Strength</th>
        <th>Agility</th>
        <th>Vitality</th>
        <th>Energy</th>
        <th>Grand Resets</th>
      </tr>
      {characters.map((character, i) => (
        <tr key={character.Name}>
          <td>{i === 0 ? <img className="troopy" src="/images/icons/troopy.png" alt="troopy" /> : i + 1}</td>
          <td>{character.Name}</td>
          <td>{character.AccountID}</td>
          <td>{getClass(character.Class)}</td>
          <td>{character.Resets}</td>
          <td>{character.Strength}</td>
          <td>{character.Dexterity}</td>
          <td>{character.Vitality}</td>
          <td>{character.Energy}</td>
          <td>{character.GrandResets}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
