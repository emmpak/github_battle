var React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(language) {
    this.setState(function () {
      return {
        selectedLanguage: language
      }
    });
  }
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Jave', 'CSS', 'Python'];

    return (
      <ul className='languages'>
        {languages.map(function (language) {
          return (
            <li
              style={language === this.state.selectedLanguage ? { color: '#d0021b' } : null}
              onClick = {this.updateLanguage.bind(null, language)}
              key={language}>
              {language}
            </li>
          )
      }, this)}
      </ul>
    )
  }
}

module.exports = Popular;
