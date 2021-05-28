import knex from "../db/connection";
import {COMPANY} from "../constants/table"

/**
 * Fetch all COMPANY
 * 
 * @returns {Array}
 * 
 */
export async function findAll(){
    const company = await knex(COMPANY);
    return company;
}

/**
 * Fetch company by Identification
 * 
 * @params {String} id
 * @returns {Array}
 * 
 */
export async function findById(id){
    const company = await knex(COMPANY).select().where({"company_id": id});
    return company;
}

/**
 * Fetch company by Code
 * 
 * @params {String} code
 * @returns {Array}
 * 
 */
export async function findByCode(code){
    const company = await knex(COMPANY).select().where({"company_code": code});
    return company;
}

/**
 * Create company
 * 
 * @params {Object} data
 * @returns {Array}
 * 
 */
export async function create(data){
    const company = await knex(COMPANY).insert(data).returning("*").then(rows => {return rows[0];});
    return company;
}

/**
 * Update company
 * 
 * @params {Object} data
 * @returns {Array}
 * 
 */
export async function updateById(data, id){
    const company = await knex(COMPANY).update(data).where('company_id',id).returning("*").then(rows => {return rows[0];});
    return company;
}

/**
 * Delete company
 * 
 * @params {String} id
 * @returns {Array}
 * 
 */
export async function deleteById(id){
    const company = await knex(COMPANY).delete().where('company_id',id)
    return company;
}