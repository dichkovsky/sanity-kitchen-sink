export default {
  widgets: [
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
                  buildHookId: '5fd633fc314ec1b034303fe4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mkmz339f',
                  apiId: 'e7e2cc75-faed-455f-9f79-05e0c8effecc'
                },
                {
                  buildHookId: '5fd633fc6e0e2e0783091239',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vwe842ex',
                  apiId: 'a7e2c599-2c68-45ab-8776-6cd75c9596a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dichkovsky/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vwe842ex.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
