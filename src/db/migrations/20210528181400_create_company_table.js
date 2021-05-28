import {COMPANY} from './../../constants/table';

/**
 * Create table `company`.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.up = function(knex) {
    return knex.schema.createTable(COMPANY, table => {
        // table.dropPrimary()

        table.primary('company_id')
        table.string('company_id');
        table.string('company_code').notNullable();
        table.string('company_email').unique().notNullable();
        table.string('company_name').notNullable();
        table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
        table.datetime('updated_at');
        table.boolean('active').defaultTo(true);
    });
};

/**
 * Drop `company`.
 *
 * @param {Object} knex
 * @returns {Promise}
 */

exports.down = function(knex) {
    return knex.schema.dropTable(COMPANY);
};
