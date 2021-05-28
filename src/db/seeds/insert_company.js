import {COMPANY} from './../../constants/table';
import generateUUID from "../../helper/generateUUID"

/**
 * Insert entries to company table.
 *
 * @param {Object} knex
 *
 * @returns {Promise}
 */
export function seed(knex) {
    return knex(COMPANY).insert([
        {
            company_id: generateUUID(),
            company_code: "COM",
            company_email: "company@test.test",
            company_name: "Company",
            created_at: new Date(),
            active: true,
        },
    ])
}