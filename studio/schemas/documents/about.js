import MdSomething from "react-icons/lib/md/insert-emoticon";

export default {
  name: "about",
  type: "document",
  title: "About Page",
  icon: MdSomething,
  fields: [
    {
      name: "tagline",
      type: "string",
      title: "Tagline"
    },
    {
      name: "image",
      title: "Photo of you homie",
      type: "figure"
    },
    {
      name: "bio",
      title: "Bio all about YOU",
      type: "bioPortableText"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontend will require a slug to be set to be able to show the about page i guess",
      options: {
        source: "aboutMe",
        maxLength: 96
      }
    },
    {
      name: "heading",
      type: "string",
      title: "if you ever decide that this needs a heading"
    }
  ],
  preview: {
    select: {
      title: "tagline",
      media: "image"
    }
  }
};
