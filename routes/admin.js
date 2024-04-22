const express = require('express');

const router = express.Router();

const usersController = require('../controllers/admin/users')
const vendorsController = require('../controllers/admin/vendors')
const eventOrganizersController = require('../controllers/admin/eventOrganizers')
const categoriesController = require('../controllers/admin/categories')
const ordersController = require('../controllers/admin/orders');
const eventsController = require('../controllers/admin/events');
const ticketsController = require('../controllers/admin/tickets');
const productsController = require('../controllers/admin/products');

//theory >>>> vendor and eventOrganizers must add products and tickets through the admins approval so we will use this admin routes to ADD PRODUCTS and ADD EVENTS


//http://asheweyna.biz/admin/catagories/sdawe2234wdewe..
//users
router.get('/users/count', usersController.getUserCount);
router.delete('/users/:id', usersController.deleteUser);

//vendors
router.get('/vendors/count', vendorsController.getVendorCount);
router.delete('/vendors/:id', vendorsController.deleteVendor);

//eventOrganizers
router.get('/eventOrganizers/count', eventOrganizersController.getEventOrganizerCount);
router.delete('/eventOrganizers/:id', eventOrganizersController.deleteEventOrganizer);

//catagories
router.post('/categories', categoriesController.addCategory);
router.put('/categories/:id', categoriesController.editCategory);
router.delete('/categories/:id', categoriesController.deleteCategory);

//Events
router.get('/events/count', eventsController.getEventsCount);
router.get('/products/count', eventsController.getEvents); //admin needs a specific version view 
router.post('/events', eventsController.addEvents);
router.put('/events/:id', eventsController.editEvents);
router.delete('/events/:id/images', eventsController.deleteEventsImages);
router.delete('/events/:id', eventsController.deleteEvents);

// //products //this is a might be function where an admin posts a  vendor product to be purchased by users
router.get('/products/count', productsController.getProductsCount);
router.get('/products/count', productsController.getProducts); //admin needs a specific version view 
router.post('/products', productsController.addProducts);
router.put('/products/:id', productsController.editProducts);
router.delete('/products/:id/images', productsController.deleteProductsImages); //will have the same function as '''''EVENTS''''''
router.delete('/products/:id', productsController.deleteProducts);

//order's product
router.get('/orders', ordersController.getOrders);
router.get('/orders/count', ordersController.getOrdersCount); //will have the same function as '''''TICKETS''''''
router.put('/orders:id', ordersController.changeOrderStatus);
router.delete('/orders:id', ordersController.deleteOrder);

// //ticket
router.get('/tickets', ticketsController.getTickets);
router.get('/tickets/count', ticketsController.getTicketsCount);
router.put('/tickets:id', ticketsController.changeTicketStatus);
router.delete('/tickets:id', ticketsController.deleteTicket);
module.exports = router;