/* eslint-disable react/prop-types */
import styles from './CountryItem.module.css';
import { flagemojiToPNG } from './EmojiFlag';

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
