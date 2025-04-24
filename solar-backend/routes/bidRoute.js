const express = require('express');
const multer = require('multer');
const { getBids, awardBid, createBid } = require('../controllers/bidController');
const { getUsers, updateUser } = require('../controllers/userController');

const router = express.Router();



// Bid management
router.get('/', getBids)
  .get('/', (req, res, next) => {
    /*
    #swagger.tags = ['Admin/Bids']
    #swagger.summary = 'Get all bids'
    #swagger.parameters['status'] = {
      in: 'query',
      description: 'Filter by bid status',
      type: 'string',
      enum: ['pending', 'awarded', 'rejected']
    }
    #swagger.parameters['lot_id'] = {
      in: 'query',
      description: 'Filter by lot ID',
      type: 'string'
    }
    #swagger.parameters['user_id'] = {
      in: 'query',
      description: 'Filter by user ID',
      type: 'string'
    }
    #swagger.parameters['page'] = {
      in: 'query',
      description: 'Page number',
      type: 'integer',
      default: 1
    }
    #swagger.parameters['limit'] = {
      in: 'query',
      description: 'Items per page',
      type: 'integer',
      default: 20
    }
    #swagger.security = [{
      "bearerAuth": []
    }]
    */
    next();
  });

router.post('/addbid', createBid);

router.post('/:id/award', awardBid)
  .post('/:id/award', (req, res, next) => {
    /*
    #swagger.tags = ['Admin/Bids']
    #swagger.summary = 'Award a bid to a user'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Bid ID',
      required: true,
      type: 'string'
    }
    #swagger.requestBody = {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              final_price: {
                type: 'number',
                description: 'Final awarded price',
                example: 200.50
              },
              commission: {
                type: 'number',
                description: 'Commission amount',
                example: 20.05
              }
            },
            required: ['final_price', 'commission']
          }
        }
      }
    }
    #swagger.security = [{
      "bearerAuth": []
    }]
    */
    next();
  });

// User management
router.get('/users', getUsers)
  .get('/users', (req, res, next) => {
    /*
    #swagger.tags = ['Admin/Users']
    #swagger.summary = 'Get all users'
    #swagger.parameters['role'] = {
      in: 'query',
      description: 'Filter by user role',
      type: 'string',
      enum: ['admin', 'customer']
    }
    #swagger.parameters['verified'] = {
      in: 'query',
      description: 'Filter by verification status',
      type: 'boolean'
    }
    #swagger.parameters['search'] = {
      in: 'query',
      description: 'Search by name or email',
      type: 'string'
    }
    #swagger.parameters['page'] = {
      in: 'query',
      description: 'Page number',
      type: 'integer',
      default: 1
    }
    #swagger.parameters['limit'] = {
      in: 'query',
      description: 'Items per page',
      type: 'integer',
      default: 20
    }
    #swagger.security = [{
      "bearerAuth": []
    }]
    */
    next();
  });

router.put('/users/:id', updateUser)
  .put('/users/:id', (req, res, next) => {
    /*
    #swagger.tags = ['Admin/Users']
    #swagger.summary = 'Update user information'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'User ID',
      required: true,
      type: 'string'
    }
    #swagger.requestBody = {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'User full name'
              },
              email: {
                type: 'string',
                description: 'User email'
              },
              role: {
                type: 'string',
                enum: ['admin', 'customer'],
                description: 'User role'
              },
              is_verified: {
                type: 'boolean',
                description: 'Verification status'
              }
            }
          }
        }
      }
    }
    #swagger.security = [{
      "bearerAuth": []
    }]
    */
    next();
  });

module.exports = router;