package com.IPL_Dashboard.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.IPL_Dashboard.model.Team;

public interface TeamRepository extends JpaRepository<Team, Long>{
	
	Team findByTeamName (String teamName);

}
