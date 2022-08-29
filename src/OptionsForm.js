import React from "react";
import { generateSlug } from "random-word-slugs";

class OptionsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfWords: 1, slug: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ numberOfWords: event.target.value });
  }

  handleSubmit(event) {
    const slug = generateSlug(this.state.numberOfWords, {
      format: "title",
      categories: {
        noun: ["animals", "place", "thing"],
      },
    });
    this.setState({ slug: slug });
    event.preventDefault();
  }

  render() {
    return (
      <div className="max-w-md mx-auto p-3 border-solid border-2 border-[#001858] bg-[#f3d2c1]">
        <form onSubmit={this.handleSubmit}>
          <label className="block text-md font-medium text-gray-700 mx-auto">
            Number of words for topic
          </label>

          <input
            type="number"
            list="wordCount"
            name="wordCount"
            min="1"
            max="10"
            step="1"
            onChange={this.handleChange}
            placeholder="1"
            className="block w-full rounded-md w-10 p-1 mx-auto"
          />
          <input
            type="submit"
            value="Generate"
            className="border-solid border-2 border-[#001858] p-1 m-4 rounded-md hover:bg-[#f582ae] bg-[#8bd3dd]"
          />
        </form>
        <h3 className="m-2">
          {this.state.slug ? `Topic: ${this.state.slug}` : ""}
        </h3>
      </div>
    );
  }
}

export default OptionsForm;
