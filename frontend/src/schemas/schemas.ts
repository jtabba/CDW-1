import {MenteeInfo} from '../types';
import Joi from 'joi';
export const MenteeSchema = Joi.object<MenteeInfo>();