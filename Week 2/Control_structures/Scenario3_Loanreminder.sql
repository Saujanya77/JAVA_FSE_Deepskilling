CREATE TABLE CUSTOMERS (
    CUSTOMERID NUMBER PRIMARY KEY,
    CUSTOMERNAME VARCHAR2(100),
    AGE NUMBER,
    BALANCE NUMBER,
    LOANINTERESTRATE NUMBER,
    ISVIP VARCHAR2(5)
);

INSERT INTO CUSTOMERS VALUES (
    1,
    'John',
    65,
    12000,
    9.5,
    'FALSE'
);

INSERT INTO CUSTOMERS VALUES (
    2,
    'Mary',
    45,
    8000,
    10.0,
    'FALSE'
);

INSERT INTO CUSTOMERS VALUES (
    3,
    'Sita',
    70,
    15000,
    8.0,
    'FALSE'
);

INSERT INTO CUSTOMERS VALUES (
    4,
    'Ali',
    30,
    2000,
    12.0,
    'FALSE'
);

COMMIT;

CREATE TABLE LOANS (
    LOANID NUMBER PRIMARY KEY,
    CUSTOMERID NUMBER,
    CUSTOMERNAME VARCHAR2(100),
    DUEDATE DATE,
    LOANAMOUNT NUMBER
);

INSERT INTO LOANS VALUES (
    201,
    1,
    'John',
    SYSDATE + 10,
    5000
);

-- Due in 10 days
INSERT INTO LOANS VALUES (
    202,
    2,
    'Mary',
    SYSDATE + 5,
    3000
);

-- Due in 5 days
INSERT INTO LOANS VALUES (
    203,
    3,
    'Sita',
    SYSDATE + 40,
    10000
);

-- Due in 40 days (should be ignored)
INSERT INTO LOANS VALUES (
    204,
    4,
    'Ali',
    SYSDATE + 2,
    1500
);

-- Due in 2 days
COMMIT;

SET SERVEROUTPUT ON;

DECLARE
    CURSOR DUE_SOON IS
    SELECT
        LOANID,
        CUSTOMERID,
        CUSTOMERNAME,
        DUEDATE
    FROM
        LOANS
    WHERE
        DUEDATE BETWEEN SYSDATE AND SYSDATE + 30;
    V_LOANID       LOANS.LOANID%TYPE;
    V_CUSTOMERID   LOANS.CUSTOMERID%TYPE;
    V_CUSTOMERNAME LOANS.CUSTOMERNAME%TYPE;
    V_DUEDATE      LOANS.DUEDATE%TYPE;
BEGIN
    OPEN DUE_SOON;
    LOOP
        FETCH DUE_SOON INTO V_LOANID, V_CUSTOMERID, V_CUSTOMERNAME, V_DUEDATE;
        EXIT WHEN DUE_SOON%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer '
                             || V_CUSTOMERNAME
                             || ' (ID: '
                             || V_CUSTOMERID
                             || ') has Loan ID '
                             || V_LOANID
                             || ' due on '
                             || TO_CHAR(V_DUEDATE, 'DD-MON-YYYY')
                                || '.');
    END LOOP;

    CLOSE DUE_SOON;
END;
/