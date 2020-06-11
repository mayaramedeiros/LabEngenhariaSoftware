/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import java.io.PrintWriter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "Cadastro", urlPatterns={"/cadastro"})
public class Cadastro extends HttpServlet{
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse res){
        try{
            res.sendRedirect(req.getContextPath() + "/login");
        }catch (Exception e){
            System.out.println("Erro");
        }
    }
    
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse res){
        try{
            req.getRequestDispatcher("/jsp/cadastro.jsp").forward(req, res);
        }catch (Exception e){
            System.out.println("Erro");
        }
    }


}