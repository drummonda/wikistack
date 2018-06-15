const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging:false
});

const slugify = function(title) {
  return title.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');
}

module.exports = {
  db
}

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING, allowNull: false
  },
  slug: {
    type: Sequelize.STRING, allowNull: false
  },
  content: {
    type: Sequelize.TEXT, allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'), defaultValue: 'open',
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING, allowNull: false,
    validate: {isAlphta: true}
  },
  email: {
    type: Sequelize.STRING, allowNull: false,
    validate: {isEmail: true}
  }
});

Page.beforeValidate((pageInstance) => {
  pageInstance.slug = slugify(pageInstance.title);
})

module.exports = { db, Page, User };
