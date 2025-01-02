import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: 'startup',
  title: 'Startup',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'),
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
        name: 'description',
        type: 'text',
    }),
    defineField({
        name: 'views',
        type: 'number',
    }),
    defineField({
        name: 'category',
        type: 'string',
        validation: (Rule) => Rule.min(2).max(20).required().error('category must be 3 and 20 characters'),
    }),
    defineField({
        name: 'image',
        type: 'url',
    }), 
    defineField({
        name:'pitch',
        type: 'markdown',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
    
    },
  },
})
