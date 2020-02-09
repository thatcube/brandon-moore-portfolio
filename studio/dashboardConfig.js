export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5da342069b1214cf940deb6a',
                  title: 'brandonmoore.io',
                  name: 'brandon-moore-portfolio',
                  apiId: '2ed0f198-ebbc-4543-ba06-bea2f202e166'
                },
                {
                  buildHookId: '5da3420685827f0f383abef4',
                  title: 'Sanity Studio',
                  name: 'brandon-moore-portfolio-studio',
                  apiId: '3d791f31-4098-4892-be76-a9bbd926bb4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thatcube/brandon-moore-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://brandon-moore-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      },
      layout: { width: 'medium' }
    },
    {
      name: 'document-list',
      options: { title: 'Projects', order: '_createdAt desc', types: ['project'] },
      layout: { width: 'medium' }
    },
    {
      name: 'structure-menu',
      layout: { width: 'medium' }
    }

  ]
}
