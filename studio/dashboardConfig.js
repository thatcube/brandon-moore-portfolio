export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da3420685827f0f383abef4',
                  title: 'Sanity Studio',
                  name: 'brandon-moore-portfolio-studio',
                  apiId: '3d791f31-4098-4892-be76-a9bbd926bb4b'
                },
                {
                  buildHookId: '5da342069b1214cf940deb6a',
                  title: 'Portfolio Website',
                  name: 'brandon-moore-portfolio',
                  apiId: '2ed0f198-ebbc-4543-ba06-bea2f202e166'
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
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
