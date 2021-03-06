'use strict'

const Schema = use('Schema')

class ArticleCommentSchema extends Schema {
  up () {
    this.create('ni_article_comment', (table) => {
      table.increments('ni_id')
      table.integer('article_id').unsigned().index()
      table.foreign('article_id').references('ni_article.ni_id').onDelete('CASCADE')
      table.integer('member_id').unsigned().index()
      table.foreign('member_id').references('ni_member.ni_id').onDelete('CASCADE')
      table.string('content').comment('评论内容')
      // table.integer('this_floor').defaultTo(0).comment('楼层(0:顶层评论, ni_id:回复顶层评论)')
      // table.integer('this_parent_comment_id').defaultTo(0).comment('回复 parent 的 ID')
      table.string('member_ip').comment('来自会员的IP位置')
      table.boolean('current_comment_state').defaultTo(0).comment('评论的状态，禁止/显示')
      table.timestamps()
    })
  }

  down () {
    this.drop('ni_article_comment')
  }
}

module.exports = ArticleCommentSchema
