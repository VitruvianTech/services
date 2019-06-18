import {SolutionContact} from '@vitruviantech/services/models/default';

export const create = async req => {
    const {email, solution} = req.body;

    return await SolutionContact.upsert({
      ContactEmail: email,
      SolutionId: solution.id,
      summary: solution.summary
    });
};