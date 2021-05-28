import * as companyService from "../services/company"

import generateUUID from "../helper/generateUUID"

/**
 * Find all company.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function findAll(req, res, next) {
    try {
        const response = await companyService.findAll();

        res.json({
            data : response
        });
    } catch (err) {
        console.log("err",err)
        next(err);
    }
}

/**
 * Find company by id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function findById(req, res, next) {
    try {
        const response = await companyService.findById(req.params.id);

        res.json({
            data : response
        });
    } catch (err) {
        next(err);
    }
}

/**
 * create module.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function create(req, res, next) {
    try {
        const {
            code,
            email,
            name
        } = req.body
        if (!code || !email || !name) {
            throw new Error('Missing fields')
        } else {

            const id = generateUUID();
            const createDate = new Date();
            const data = {
                company_id: id,
                company_code: code,
                company_email: email,
                company_name: name,
                created_at: createDate,
                active: true
            }

            const response = await companyService.create(data);

            res.json({
                data : response
            });
        }
    } catch (err) {
        next(err);
    }
}

/**
 * update module by Id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function updateById(req, res, next) {
    try {
        const {
            code,
            email,
            name,
            active
        } = req.body
        if (!code || !email || !name) {
            throw new Error('Missing fields')
        } else {
            const updateDate = new Date();
            const data = {
                company_code: code,
                company_email: email,
                company_name: name,
                updated_at: updateDate,
                active: active
            }

            const response = await companyService.updateById(data, req.params.id);

            res.json({
                data : response
            });
        }
    } catch (err) {
        next(err);
    }
}



/**
 * delete module by Id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function deleteById(req, res, next) {
    try {
        const response = await companyService.deleteById(req.params.id);

        res.json({
            data : response
        });
    } catch (err) {
        next(err);
    }
}