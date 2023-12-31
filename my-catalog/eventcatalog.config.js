const path = require('path');
module.exports = {
  title: 'EventCatalog',
  tagline: 'Discover, Explore and Document your Event Driven Architectures',
  organizationName: 'Banco Bci',
  projectName: 'Event Catalog',
  editUrl: 'https://github.com/aibacetat/catalogo/edit/main/my-catalog',
  trailingSlash: true,
  primaryCTA: {
    label: 'Explore Events',
    href: '/events'
  },
  secondaryCTA: {
    label: 'Getting Started',
    href:"https://www.eventcatalog.dev/"
  },
  logo: {
    alt: 'EventCatalog Logo',
    // found in the public dir
    src: 'logo.svg',
  },
  headerLinks: [
    { label: 'Events', href: '/events'},
    { label: 'Services', href: '/services' },
    { label: 'Domains', href: '/domains'},
    { label: 'Users', href: '/users'},
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
  ],
  footerLinks: [
    { label: 'Events', href: '/events' },
    { label: 'Services', href: '/services' },
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
    { label: 'GitHub', href: 'https://github.com/aibacetat/catalogo/edit/main/my-catalog' }
  ],
  users: [
    {
      id: 'dboyne',
      name: 'David Boyne',
      avatarUrl: 'https://pbs.twimg.com/profile_images/1262283153563140096/DYRDqKg6_400x400.png',
      role: 'Developer',
    },
    {
      id: 'mSmith',
      name: 'Matthew Smith',
      avatarUrl: 'https://randomuser.me/api/portraits/lego/3.jpg',
      role: 'Developer',
    },
    {
      id: 'aibacet',
      name: 'Aaron Ibaceta',
      avatarUrl: 'https://i.pinimg.com/originals/30/d9/09/30d90918935f27240759e4bafa0bba55.jpg',
      role: 'Owner',
    },
  ],
  generators: 
  [
    [
      '@eventcatalog/plugin-doc-generator-asyncapi',
    {
      //path to your AsyncApi files
      pathToSpec: [path.join(__dirname, 'drops/asyncapi.yml')],

      //version events if already in catalog (optional)
      versionEvents: true,
      domainName: 'ejemplo1'
    },
      ],
  ],
}

