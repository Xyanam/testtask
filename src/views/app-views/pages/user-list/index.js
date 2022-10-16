import React, { useEffect, useState } from "react";
import { Card, Table, Tooltip, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import moment from "moment";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import axios from "axios";
import Loading from "components/shared-components/Loading";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      setUsers(resp.data);
      setLoader(false);
    });
  }, []);

  const tableColumns = [
    {
      title: "User",
      dataIndex: "name",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            src={record.img}
            name={record.name}
            subTitle={record.email}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Last online",
      dataIndex: "lastOnline",
      render: (date) => <span>{moment.unix(date).format("MM/DD/YYYY")} </span>,
      sorter: (a, b) =>
        moment(a.lastOnline).unix() - moment(b.lastOnline).unix(),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="View">
            <Link
              to={{
                pathname: "/app/pages/setting/edit-profile",
                state: {
                  id: elm.id,
                },
              }}
            >
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                size="small"
              />
            </Link>
          </Tooltip>
        </div>
      ),
    },
  ];

  return loader ? (
    <Loading />
  ) : (
    <>
      <Card bodyStyle={{ padding: "0px" }}>
        <Table columns={tableColumns} dataSource={users} rowKey="id" />
        <UserView />
      </Card>
    </>
  );
};

export default UserList;
