import {Component} from 'react'
import {
  GenButton,
  HeadingMain,
  FlexDiv,
  Para,
  MemeImage,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {val1: '', val2: '', val3: '', val4: 0}

  LogValues = event => {
    console.log(
      'Form:',
      event.target[0].value,
      event.target[1].value,
      event.target[2].value,
      event.target[3].value,
    )
    this.setState({
      val1: event.target[0].value,
      val2: event.target[1].value,
      val3: event.target[2].value,
      val4: event.target[3].value,
    })
    event.preventDefault()
  }

  render() {
    const {val1, val2, val3, val4} = this.state
    return (
      <>
        <form onSubmit={this.LogValues}>
          <HeadingMain>Meme Generator</HeadingMain>
          <FlexDiv>
            <label htmlFor="in1">Image URL</label>
            <input placeholder="Enter the Image URL" id="in1" />
          </FlexDiv>
          <FlexDiv>
            <label htmlFor="in2">Top Text</label>
            <input placeholder="Enter the Top Text" id="in2" />
          </FlexDiv>
          <FlexDiv>
            <label htmlFor="in3">Bottom Text</label>
            <input placeholder="Enter the Bottom Text" id="in3" />
          </FlexDiv>
          <FlexDiv>
            <label htmlFor="in4">Font Size</label>
            <select id="in4">
              {fontSizesOptionsList.map(font => (
                <option value={font.optionId} key={font.optionId}>
                  {font.displayText}
                </option>
              ))}
            </select>
          </FlexDiv>
          <GenButton type="submit" value="Submit">
            Generate
          </GenButton>
        </form>

        <MemeImage imageUrl={val1} data-testid="meme">
          <Para font={val4}>{val2}</Para>
          <Para font={val4}>{val3}</Para>
        </MemeImage>
      </>
    )
  }
}

export default MemeGenerator
