CREATE TABLE ACCOUNTS (
    ACCOUNTID NUMBER PRIMARY KEY,
    CUSTOMERNAME VARCHAR2(30),
    BALANCE NUMBER
);

INSERT INTO ACCOUNTS VALUES (
    201,
    'John',
    8000
);

INSERT INTO ACCOUNTS VALUES (
    202,
    'Mary',
    6000
);

COMMIT;

CREATE OR REPLACE PROCEDURE TRANSFERFUNDS (
    P_FROM_ACCT IN NUMBER,
    P_TO_ACCT IN NUMBER,
    P_AMOUNT IN NUMBER
) AS
    V_BALANCE NUMBER;
BEGIN
 
    -- Check balance of source account
    SELECT
        BALANCE INTO V_BALANCE
    FROM
        ACCOUNTS
    WHERE
        ACCOUNTID = P_FROM_ACCT;
    IF V_BALANCE < P_AMOUNT THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
    ELSE
 
        -- Deduct from source
        UPDATE ACCOUNTS
        SET
            BALANCE = BALANCE - P_AMOUNT
        WHERE
            ACCOUNTID = P_FROM_ACCT;
 
        -- Add to destination
        UPDATE ACCOUNTS
        SET
            BALANCE = BALANCE + P_AMOUNT
        WHERE
            ACCOUNTID = P_TO_ACCT;
        COMMIT;
    END IF;
END;
/