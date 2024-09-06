import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import logo from "../assets/teamupLogoAndTitle.svg";
import linkedln from "../assets/linkedln.svg";
import github from "../assets/github.svg";
import facebook from "../assets/facebook.svg";
const Footer = () => {
  return (
    <div className={style.footer}>
      <section className={style.footerCountainer}>
        <div className={style.fouterTMainContent}>
          <h1 className={style.footeTitle}>About TeamUp</h1>
          <div className={style.subFooterCountainer}>
            <Link className={style.contenteSubFooter} to="/about">
              Our Mission
            </Link>
            <Link className={style.contenteSubFooter} to="/about">
              Core Values
            </Link>
            <Link className={style.contenteSubFooter} to="/about">
              Brand Guide
            </Link>
            <Link className={style.contenteSubFooter} to="/about">
              Item list
            </Link>
          </div>
        </div>

        <div className={style.fouterTMainContent}>
          <h1 className={style.footeTitle}>Explore</h1>
          <div className={style.subFooterCountainer}>
            <Link className={style.contenteSubFooter} to="/categories">
              Categories
            </Link>
            <Link className={style.contenteSubFooter} to="/mentorship">
              Mentors
            </Link>
            <Link className={style.contenteSubFooter} to="/home">
              Projects
            </Link>
            <Link className={style.contenteSubFooter} to="/mentorship">
              Mentorship
            </Link>
          </div>
        </div>

        <div className={style.fouterTMainContent}>
          <h1 className={style.footeTitle}>Quick Links</h1>
          <div className={style.subFooterCountainer}>
            <Link className={style.contenteSubFooter} to="/login">
              Log In
            </Link>
            <Link className={style.contenteSubFooter} to="/SignUp">
              SignUp
            </Link>
            <Link className={style.contenteSubFooter} to="/home">
              Home
            </Link>
          </div>
        </div>

        <div className={style.fouterTMainContent}>
          <h1 className={style.footeTitle}>Resources</h1>
          <div className={style.subFooterCountainer}>
            <Link className={style.contenteSubFooter} to="/about">
              FAQ
            </Link>
            <Link className={style.contenteSubFooter} to="/about">
              Support
            </Link>
          </div>
        </div>

        <div className={style.fouterTMainContent}>
          <h1 className={style.footeTitle}>Legal</h1>
          <div className={style.subFooterCountainer}>
            <Link className={style.contenteSubFooter} to="/about">
              Privacy Policy
            </Link>
            <Link className={style.contenteSubFooter} to="/about">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className={style.fouterTMainContentExeption}>
          <h1 className={style.footeTitle}>Contact</h1>
          <div className={style.subFooterCountainerExeption}>
            <p className={style.enterEmailFooter}>Enter your email</p>
            <div className={style.subFooterCountainerException}>
              <Input
                placeholder="eg.moha riade17@gmail.com"
                style={{
                  backgroundColor: "/F5F5F5",
                  height: "38px",
                }}
              ></Input>
              <Button
                type="Primary"
                style={{
                  background: "#6738DD",
                  color: "white",
                  width: "180px",
                  height: "42px",
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className={style.line}></div>
      <div className={style.countainerTwoFooter}>
        <img src={logo} className={style.logoWith} />
        <h1 className={style.rightReseved}>
          © 2024 TemaUp. All Rights Reserved.{" "}
        </h1>
        <div className={style.footerSocialMedia}>
          <img src={linkedln} className={style.socailMediaPics} />
          <img src={github} className={style.socailMediaPics} />
          <img src={facebook} className={style.socailMediaPics} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
