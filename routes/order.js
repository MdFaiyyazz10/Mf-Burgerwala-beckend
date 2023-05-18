import express from "express";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import { getAdminOrders, getMyOrders, getOrderdetails, paymentVerification, placeOrder, placeOrderOnline, processOrder } from "../controllers/order.js";

const router = express.Router();

// Adding COD PlaceOrder
router.post("/placeorder", isAuthenticated , placeOrder)
//Adding Online PlaceOrder
router.post('/placeorderonline', isAuthenticated,placeOrderOnline)
//Payment Verification
router.post('/paymentverification', isAuthenticated , paymentVerification)

router.get('/myorders',isAuthenticated,getMyOrders)

router.get('/order/:id',isAuthenticated,getOrderdetails)

//Add Admin Middleware
router.get('/admin/order',isAuthenticated, authorizedAdmin , getAdminOrders)

router.get('/admin/order/:id',isAuthenticated, authorizedAdmin ,processOrder)



export default router;